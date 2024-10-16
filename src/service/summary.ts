import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

import OpenAI from 'openai'

import { sleep } from '@/utils'

const queue = new Set<Promise<unknown>>()

export async function createSummary(content: string) {
  async function query(time: number) {
    await sleep(time)
    const openai = new OpenAI({
      baseURL: 'https://api.wlai.vip/v1/',
    })

    const completion = await openai.chat.completions.create({
      messages: [
        {
          content:
            "Please generate a very short summary (in English) of the user content, do not include the author's subjective opinions, and must be no longer than 20 words (this is important).",
          role: 'system',
        },
        { content, role: 'user' },
      ],
      model: 'gpt-4',
    })

    return completion.choices[0].message.content
  }

  // not sure how to limit API requests, when I wake up I will have all the result
  const delay = queue.size * 60000

  // eslint-disable-next-line no-console
  console.log(`task ${queue.size}, waiting for ${delay / 1000}s...`)
  const promise = query(delay)
  queue.add(promise)
  const result = await promise
  queue.delete(promise)
  // eslint-disable-next-line no-console
  console.log(`task ${queue.size} done`)
  return result
}

const cwd = process.cwd()
const summaryFilePath = join(cwd, 'summary.json')

export async function getSummary() {
  try {
    const fileContent = await readFile(summaryFilePath, 'utf-8')
    return JSON.parse(fileContent)
  } catch {
    return {}
  }
}

export async function writeSummery(newSummery: unknown) {
  await writeFile(summaryFilePath, JSON.stringify(newSummery, null, 2))
}
