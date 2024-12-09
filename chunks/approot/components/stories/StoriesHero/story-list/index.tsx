import StoryItem from './story-item';

const StoryList = ({ posts, ready }: any) => (
  <div className="flex-1 flex flex-col justify-between h-full w-full items-start gap-2">
    {posts.map((post: any, index: number) => (
      <StoryItem ready={ready} key={index} {...post} additionalClassNames="sm:h-unset" large={false} />
    ))}
  </div>
);

export default StoryList;
