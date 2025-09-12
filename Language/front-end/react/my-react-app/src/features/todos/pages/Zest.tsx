import React from 'react';

export function ZestPage() {
  
  const handleItemClick = (item: string) => {
    alert(`${item} 클릭됨!`);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">
        🚀 Zest Page List
      </h1>
      
      <div className="max-w-2xl mx-auto">
        <div className="grid gap-4">
          {zestList.map((item, idx) => (
            <button 
              key={idx} 
              onClick={() => handleItemClick(item)}
              className="bg-white hover:bg-indigo-50 border-2 border-indigo-200 hover:border-indigo-400 
                         rounded-lg p-4 text-left shadow-md hover:shadow-lg transition-all duration-300 
                         transform hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600">
                  {item}
                </span>
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  ➡️
                </span>
              </div>
            </button>
          ))}
        </div>
        
        {/* 추가 액션 버튼들 */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all">
            ➕ 새 항목 추가
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all">
            🔄 새로고침
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all">
            ⚙️ 설정
          </button>
        </div>
      </div>
    </div>
  );
}

const zestList = [
  "Zest Item 1 - Android Development",
  "Zest Item 2 - React Components", 
  "Zest Item 3 - TypeScript Guide",
  "Zest Item 4 - Tailwind CSS Styling"
];
