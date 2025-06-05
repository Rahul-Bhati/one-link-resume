import { FileText } from 'lucide-react'; // Assuming you're using Lucide icons
import { Button } from './ui/button'; // Assuming you're using a custom Button component

const ResumeCard = () => {
  return (
    <div className="mt-8 sm:mt-12 md:mt-16 relative px-4 md:px-0">
      <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 max-w-full sm:max-w-2xl md:max-w-4xl mx-auto border animate-float">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center space-x-3 mb-4 sm:mb-0">
            <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
            <span className="text-base sm:text-lg font-semibold truncate">
              Resume.pdf
            </span>
          </div>
          <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Live Link</span>
          </div>
        </div>

        {/* Link Section */}
        <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
            <span className="text-blue-600 font-mono text-xs sm:text-sm truncate">
              linkdoc.ai/doc/john-resume
            </span>
            <Button
              size="sm"
              variant="outline"
              className="w-full sm:w-auto text-xs sm:text-sm"
            >
              Copy Link
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-xl sm:text-2xl font-bold text-blue-600">247</div>
            <div className="text-xs sm:text-sm text-gray-600">Views</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-green-600">12</div>
            <div className="text-xs sm:text-sm text-gray-600">Updates</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-purple-600">1</div>
            <div className="text-xs sm:text-sm text-gray-600">Link</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;