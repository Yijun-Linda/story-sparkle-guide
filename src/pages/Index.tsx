
import { useState } from "react";
import { Book, Star, Check } from "lucide-react";

interface Story {
  id: number;
  title: string;
  author: string;
  image: string;
  tags: string[];
  summary: string;
}

const stories: Story[] = [
  {
    id: 1,
    title: "春天的故事",
    author: "李华",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    tags: ["短篇", "温馨", "自然"],
    summary: "一个关于春天、希望和新生的温暖故事，讲述了小草破土而出的勇气...",
  },
  {
    id: 2,
    title: "山间晨雾",
    author: "张明",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    tags: ["中篇", "励志", "人生"],
    summary: "在群山环绕中，一个年轻人寻找人生方向的故事，充满哲理与启发...",
  },
  {
    id: 3,
    title: "城市之光",
    author: "王芳",
    image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
    tags: ["长篇", "都市", "成长"],
    summary: "都市中的一抹温情，展现了普通人的坚持与梦想，平凡中的不平凡...",
  },
];

const Index = () => {
  const [selectedStory, setSelectedStory] = useState<number | null>(null);
  const [started, setStarted] = useState(false);

  return (
    <div className="min-h-screen w-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Title Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 inline-block bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            <span className="title-animation">为您推荐</span>
            <span className="title-animation ml-2">以下故事</span>
          </h1>
          
          {!started && (
            <button
              onClick={() => setStarted(true)}
              className="btn-start group mt-8 animate-button-pulse"
            >
              <span className="relative z-10">开始推荐</span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-500 to-orange-400 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          )}
        </div>

        {/* Story Cards */}
        {started && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <div
                key={story.id}
                className={`story-card cursor-pointer ${
                  selectedStory === story.id
                    ? "ring-2 ring-orange-500"
                    : "hover:scale-[1.02]"
                }`}
                onClick={() => setSelectedStory(story.id)}
              >
                <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-story-content">
                    {story.title}
                  </h3>
                  <p className="text-sm text-story-author">{story.author}</p>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  {story.tags.map((tag) => (
                    <span key={tag} className="story-tag">
                      <Star className="mr-1 h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-story-content">{story.summary}</p>
              </div>
            ))}
          </div>
        )}

        {/* Selection Button */}
        {started && selectedStory && (
          <div className="mt-12 text-center">
            <button className="btn-selected group">
              <span className="flex items-center">
                <Check className="mr-2 h-5 w-5" />
                选好了
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
