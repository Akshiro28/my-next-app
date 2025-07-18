'use client';

import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  name: string;
  body: string;
}

interface Album {
  id: number;
  title: string;
}

interface Photo {
  id: number;
  title: string;
  thumbnailUrl: string;
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

type DataType = 'users' | 'posts' | 'comments' | 'albums' | 'photos' | 'todos';

type DataMap = {
  users: User[];
  posts: Post[];
  comments: Comment[];
  albums: Album[];
  photos: Photo[];
  todos: Todo[];
};

function getTypedData<K extends DataType>(
  displayedType: K,
  incomingData: Partial<DataMap> | null,
  data: Partial<DataMap>
): DataMap[K] {
  return (incomingData?.[displayedType] || data[displayedType] || []) as DataMap[K];
}

export default function JsonPlaceholderPractice() {
  const [selectedType, setSelectedType] = useState<DataType>('posts');
  const [data, setData] = useState<Partial<DataMap>>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const [incomingData, setIncomingData] = useState<Partial<DataMap> | null>(null);
  const [displayedType, setDisplayedType] = useState<DataType>('posts');

  const [dotsInputIndex, setDotsInputIndex] = useState<number | null>(null);
  const [customPage, setCustomPage] = useState('');

  const itemsPerPageMap: Record<DataType, number> = {
    users: 10,
    posts: 10,
    comments: 10,
    albums: 8,
    photos: 12,
    todos: 12,
  };

  const itemsPerPage = itemsPerPageMap[displayedType];

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/${selectedType}`);
      const json = await res.json();

      setIncomingData({ [selectedType]: json });

      setTimeout(() => {
        setData(prev => ({ ...prev, [selectedType]: json }));
        setIncomingData(null);
        setSearchTerm('');
        setCurrentPage(1);
        setDisplayedType(selectedType);
      }, 0);
    };

    fetchData();
  }, [selectedType]);

  const fullData = getTypedData(displayedType, incomingData, data);
  const filteredData = fullData.filter((item) => {
    const term = searchTerm.toLowerCase();

    switch (displayedType) {
      case 'users': {
        const user = item as User;
        return user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term);
      }
      case 'posts': {
        const post = item as Post;
        return post.title.toLowerCase().includes(term) || post.body.toLowerCase().includes(term);
      }
      case 'comments': {
        const comment = item as Comment;
        return comment.name.toLowerCase().includes(term) || comment.body.toLowerCase().includes(term);
      }
      case 'albums':
      case 'photos':
      case 'todos': {
        const obj = item as Album | Photo | Todo;
        return obj.title?.toLowerCase().includes(term);
      }
      default:
        return false;
    }
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getPaginationRange = (current: number, total: number): (number | 'dots')[] => {
    const delta = 2;
    const range: (number | 'dots')[] = [];

    const left = Math.max(2, current - delta);
    const right = Math.min(total - 1, current + delta);

    range.push(1);

    if (left > 2) {
      range.push('dots');
    }

    for (let i = left; i <= right; i++) {
      range.push(i);
    }

    if (right < total - 1) {
      range.push('dots');
    }

    if (total > 1) {
      range.push(total);
    }

    return range;
  };

  const renderData = () => {
    switch (displayedType) {
      case 'users':
        return (
          <ul className="grid xl:grid-cols-3 lg:grid-cols-2 gap-4 text-left">
            {(paginatedData as User[]).map(user => (
              <li
                key={user.id}
                className="flex items-center ring ring-[var(--foreground-20)] md:py-6 md:px-8 p-4 rounded-lg bg-[var(--foreground-3)] hover:ring-[var(--foreground-50)] hover:bg-[var(--foreground-5)]"
              >
                <img src="images/user-profile.png" alt="UserProfile" className="h-12" />
                <div className="ms-2">
                  <p className="text-xl font-bold mb-1">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </li>
            ))}
          </ul>
        );

      case 'posts':
        return (
          <ul className="grid lg:grid-cols-2 gap-4 text-left">
            {(paginatedData as Post[]).map(post => (
              <li
                key={post.id}
                className="ring ring-[var(--foreground-20)] py-6 px-8 rounded-lg bg-[var(--foreground-3)] hover:ring-[var(--foreground-50)] hover:bg-[var(--foreground-5)]"
              >
                <p className="text-xl font-bold mb-2">{post.title}</p>
                <p className="text-sm text-[var(--foreground-50)]">{post.body}</p>
              </li>
            ))}
          </ul>
        );

      case 'comments':
        return (
          <ul className="grid lg:grid-cols-2 gap-4 text-left">
            {(paginatedData as Comment[]).map(comment => (
              <li key={comment.id}>
                <div className="flex h-full ring ring-[var(--foreground-20)] p-4 md:p-6 rounded-lg bg-[var(--foreground-3)] hover:ring-[var(--foreground-50)] hover:bg-[var(--foreground-5)]">
                  <img src="images/comment.png" alt="Comment" className="h-8 md:h-10" />
                  <div className="ms-2">
                    <p className="text-xl font-bold mb-2">{comment.name}</p>
                    <p className="text-sm italic text-[var(--foreground-50)]">{comment.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        );

      case 'albums':
        return (
          <ul className="grid lg:grid-cols-2 gap-4">
            {(paginatedData as Album[]).map(album => (
              <li
                key={album.id}
                className="ring ring-[var(--foreground-20)] py-6 px-8 rounded-lg bg-[var(--foreground-3)] hover:ring-[var(--foreground-50)] hover:bg-[var(--foreground-5)]"
              >
                <p className="text-xl font-bold">{album.title}</p>
              </li>
            ))}
          </ul>
        );

      case 'photos':
        return (
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-4">
            {(paginatedData as Photo[]).map(photo => (
              <div
                key={photo.id}
                className="ring ring-[var(--foreground-20)] py-6 px-8 rounded-lg bg-[var(--foreground-3)] hover:ring-[var(--foreground-50)] hover:bg-[var(--foreground-5)]"
              >
                <img src={photo.thumbnailUrl} alt={photo.thumbnailUrl} className="w-full" />
                <p className="text-sm mt-1 text-[var(--foreground-50)]">{photo.title}</p>
              </div>
            ))}
          </div>
        );

      case 'todos':
        return (
          <ul className="space-y-2 text-left">
            {(paginatedData as Todo[]).map(todo => (
              <li key={todo.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  readOnly
                  className="mr-2 accent-sky-700"
                />
                <span>{todo.title}</span>
              </li>
            ))}
          </ul>
        );

      default:
        return <p>No data</p>;
    }
  };

  return (
    <div className="min-h-[calc(100vh-154px)] flex-1 flex items-center">
      <div className="bs-container text-center mx-auto ring rounded-xl ring-[var(--foreground-20)] lg:p-12 md:p-8 p-4 w-full max-w-4xl">
        <h1 className="md:text-4xl text-2xl font-bold mb-5 md:mb-8">
          Practicing with Sample API Data from{' '}
          <a
            href="https://jsonplaceholder.typicode.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-700 hover:text-sky-800 hover:underline"
          >
            JSONPlaceholder
          </a>
        </h1>

        <p className="md:max-w-[80%] mx-auto mb-8">
          Explore various types of sample data like users, posts, photos, and more! Fetched live from JSONPlaceholder API.  
          Each dataset could has its own layout, so feel free to click around and see how the layout adapts!
        </p>

        {/* Buttons */}
        <div className="mb-2 flex flex-wrap gap-2 justify-center">
          {(['posts', 'comments', 'albums', 'photos', 'todos', 'users'] as DataType[]).map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 ring rounded cursor-pointer ${
                selectedType === type
                  ? 'bg-sky-700 hover:bg-sky-800 ring-sky-700 hover:ring-sky-800'
                  : 'ring-[var(--foreground-20)] text-[var(--foreground-20)] hover:text-[var(--foreground-30)] hover:ring-[var(--foreground-30)] hover:bg-[var(--foreground-3)]'
              }`}
            >
              {type[0].toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Search Field */}
        <input
          type="text"
          placeholder={`Search ${selectedType}...`}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="mb-8 px-4 py-2 w-full max-w-md ring ring-[var(--foreground-20)] rounded text-sm focus:outline-none focus:ring-[var(--foreground-30)] placeholder-[var(--foreground-20)] placeholder:text-[16px] text-[16px] hover:placeholder-[var(--foreground-30)] hover:ring-[var(--foreground-30)] focus:placeholder-[var(--foreground-30)]"
        />

        {/* Rendered Data */}
        <div
          style={{ opacity: incomingData ? 0.5 : 1 }}
        >
          {renderData()}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex gap-2 justify-center flex-wrap">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className={`px-3 py-1 ring ring-[var(--foreground-20)] text-[var(--foreground-20)] rounded disabled:opacity-40 ${
                currentPage !== 1 ? 'cursor-pointer hover:text-[var(--foreground-30)] hover:ring-[var(--foreground-30)] hover:bg-[var(--foreground-3)]' : 'cursor-default'
              }`}
            >
              Prev
            </button>

            {getPaginationRange(currentPage, totalPages).map((item, i) => {
              if (item === 'dots') {
                if (dotsInputIndex === i) {
                  return (
                    <input
                      key={`input-${i}`}
                      type="number"
                      value={customPage}
                      autoFocus
                      min={1}
                      max={totalPages}
                      onChange={(e) => setCustomPage(e.target.value)}
                      onBlur={() => {
                        const page = parseInt(customPage);
                        if (!isNaN(page) && page >= 1 && page <= totalPages) {
                          setCurrentPage(page);
                        }
                        setDotsInputIndex(null);
                        setCustomPage('');
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          const page = parseInt(customPage);
                          if (!isNaN(page) && page >= 1 && page <= totalPages) {
                            setCurrentPage(page);
                          }
                          setDotsInputIndex(null);
                          setCustomPage('');
                        } else if (e.key === 'Escape') {
                          setDotsInputIndex(null);
                          setCustomPage('');
                        }
                      }}
                      className="w-16 px-2 py-1 text-center ring rounded"
                    />
                  );
                }

                return (
                  <button
                    key={`dots-${i}`}
                    onClick={() => {
                      setDotsInputIndex(i);
                      setCustomPage('');
                    }}
                    className="px-3 py-1 ring rounded ring-[var(--foreground-20)] hover:ring-[var(--foreground-30)] text-[var(--foreground-20)] hover:text-[var(--foreground-30)] hover:bg-[var(--foreground-3)] cursor-pointer"
                    title="Jump to page"
                  >
                    ...
                  </button>
                );
              }

              return (
                <button
                  key={item}
                  onClick={() => setCurrentPage(item)}
                  className={`px-3 py-1 ring ring-[var(--foreground-20)] rounded cursor-pointer ${
                    item === currentPage ? 'bg-sky-700 ring-sky-700 hover:bg-sky-800 hover:ring-sky-800' : 'text-[var(--foreground-20)] hover:text-[var(--foreground-30)] hover:ring-[var(--foreground-30)] hover:bg-[var(--foreground-3)]'
                  }`}
                >
                  {item}
                </button>
              );
            })}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className={`px-3 py-1 ring ring-[var(--foreground-20)] text-[var(--foreground-20)] rounded disabled:opacity-40 ${
                currentPage !== totalPages ? 'cursor-pointer hover:text-[var(--foreground-30)] hover:ring-[var(--foreground-30)] hover:bg-[var(--foreground-3)]' : 'cursor-default'
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
