# How to deploy your blog website

## Preface
You can find a video clip made by the first author. https://www.bilibili.com/video/BV15Z421476R/?vd_source=518577cc33ddba54a249125f2efefa3a.
By watching it, you will be able to find ways of one-click deploying, downloading giscus which is for a comment function and so on. 

## TODO
1. **one-click deploy.** 
2. **Create a username/username repository.** Make sure you have created a repository in the format of 'username/username'. For example, the repository I made is named of ZhuoQuanFan/ZhuoQuanFan. This repo is used for generating an introduction of yourself. You can edit it and it will be shown on your homepage of your blog.
3. **Discussion.** Remember to open discussion funtion of your blog repository. All the discussions will be the blogs content. 
4. **Be careful about your steps.** You don't need to edit any content in the source code until you succeed in generating the source website. The souce website's name will be Zhangyu.dev, you can make any changes after the website is deployed. Cloning the project to local and make some changes will be commended.
5. **Domain name.** If you want to make your own domain name to visit your website, you should firstly buy an domain name, and then bind it with your project.  The procedure will be at Vercel：settings-domains.
6. **Webhook** You can hook the github push actions with the vercel deployment. All you need to do is to generate a series of folds in your project. For example, mkdir '.github/webhooks/discussion-hooked.yml'. You can find a example in my project. Remember to change the url of vercel hook url to your own url.
7.  **Giscus** If you want to enable comment function, vist giscuss.app. Download it to your github and edit your repository id in the source code. Your can find your repository id by browsing https://docs.github.com/en/graphql/overview/explorer. This link https://iling.me/blog/posts/how-to-get-github-repo-id/ which helped me will help you check out your repoid.

If you have any questions, comment asap and I will do my best to help you.

Best wishes.


---










Below are introductions from the primary document.
# Blog

My personal blog.

[www.jasonfzq.top](www.jasonfzq.top)

Using [Next.js](https://nextjs.org/) v14 App Router and React Server Components. Styling with [TailwindCSS](https://tailwindcss.com/).

Using [@discublog/api](https://github.com/discublog/api) to query GitHub repository discussions and rendering Markdown with [@mdx-js/mdx](https://github.com/mdx-js/mdx).

## Vercel Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fzhangyu1818%2Fblog&env=GITHUB_TOKEN,REPO_NAME,REPO_OWNER&envDescription=GitHub%20Token&envLink=https%3A%2F%2Fdocs.github.com%2Fen%2Fauthentication%2Fkeeping-your-account-and-data-secure%2Fmanaging-your-personal-access-tokens&project-name=blog&repository-name=blog&demo-title=zhangyu1818's%20blog&demo-description=Personal%20blog&demo-url=https%3A%2F%2Fzhangyu.dev)

> [!IMPORTANT]
> Make sure to open [discussions](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository) on the new repository after creating it in "Create Git Repository" and before adding environment variables.

> [!IMPORTANT]
> After enabling Discussions, please make sure to [start a new discussion](https://docs.github.com/en/discussions/quickstart#creating-a-new-discussion), and feel free to choose any topic.

## Write Articles

1. Enable your blog repository discussions.
2. Write a new discussion.

## Fork Guide

1. Make sure you have the GitHub Profile repository like [`{username}/{username}`](https://github.com/ZhuoQuanFan/ZhuoQuanFan).
2. Modify site [metadata](https://github.com/zhangyu1818/blog/blob/next14/src/app/layout.tsx#L40).
3. Modify Google verification [here](https://github.com/zhangyu1818/blog/blob/next14/src/app/layout.tsx#L65).
4. Modify the Giscus script [here](https://github.com/zhangyu1818/blog/blob/next14/src/components/giscus/index.tsx#L17-L18).
5. Modify the [resume page](https://github.com/zhangyu1818/blog/blob/next14/src/app/resume/page.tsx).
6. Put your avatar file in `src/images/avatar.webp`.
7. Put your favicon file in `src/app/favicon.ico`.
8. Put your icons in `public/icon`.

### Env

create `.env` file in root folder.

```text
GITHUB_TOKEN=<required>
OPENAI_API_KEY=<optional>
REPO_NAME=<required>
REPO_OWNER=<required>
```

### Summary

If you need Open AI to generate your article summaries, delete `summary.json` in root folder and paste your `OPENAI_API_KEY` in `.env`.
