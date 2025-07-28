import CloseIcon from '@/components/icons/CloseIcon';

export default function TestClosePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">测试 CloseIcon</h1>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span>默认大小:</span>
            <CloseIcon />
          </div>
          <div className="flex items-center gap-4">
            <span>红色:</span>
            <div className="text-red-500">
              <CloseIcon />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>蓝色大尺寸:</span>
            <div className="text-blue-500 text-4xl">
              <CloseIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
