import { fetchSinglePost } from "@/utils/fetchSinglePost";
import GetImage from "@/components/system/GetImage";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import CustomDateFormatter from "@/components/system/CustomDateFormatter";
import BlogBodyRenderer from "@/components/system/BlogBodyRenderer";

export default async function Page({ params }) {
  const post = await fetchSinglePost(params.slug);
  return (
    <>
      <div className="flex flex-col gap-4 my-4">
        <h1 className="text-5xl font-bold text-balance text-slate-900">
          {post.title}
        </h1>
        <div className="w-full h-full rounded-lg overflow-hidden">
          <GetImage source={post.mainImage.asset._ref} title={post.title} />
          <caption className="text-base whitespace-nowrap text-center flex justify-center items-center border-none">
            {post.title}
          </caption>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-3 items-center">
            <div className="flex flex-row items-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col gap-0 text-sm">
              <h2 className="font-bold">{post.author.name}</h2>
              <div className="flex flex-row gap-2">
                <span className="text-slate-700">
                  Posted <CustomDateFormatter publishedAt={post.publishedAt} />
                </span>
                <span>·</span>
                <span className="text-slate-700">
                  {post.categories[0].title}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Button>share</Button>
          </div>
        </div>
        <div className="w-full">
          <BlogBodyRenderer body={post.body} />
        </div>
        {/* <pre className="mt-2 w-full overflow-x-auto rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(post, null, 2)}</code>
        </pre> */}
      </div>
    </>
  );
}
