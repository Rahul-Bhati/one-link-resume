import { Star } from 'lucide-react'; // Assuming Lucide icons are used for stars
import Image from 'next/image'; // Assuming Next.js Image component
import { Card, CardContent } from './ui/card'; // Adjust based on your UI library

const TestimonialCard = ({ testimonial, index }: any) => {
  return (
    <Card
      key={index}
      className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-md mx-auto"
    >
      <CardContent className="p-4 sm:p-6 md:p-8">
        <div className="flex items-center mb-3 sm:mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
            />
          ))}
        </div>
        <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6 italic line-clamp-4">
          "{testimonial.content}"
        </p>
        <div className="flex items-center w-full">
          <Image
            src={testimonial.avatar || "/placeholder.svg"}
            alt={testimonial.name}
            width={40}
            height={40}
            className="rounded-full mr-3 sm:mr-4 w-10 h-10 sm:w-12 sm:h-12 object-cover"
          />
          <div className="flex-1">
            <div className="font-semibold text-gray-900 text-sm sm:text-base">
              {testimonial.name}
            </div>
            <div className="text-gray-600 text-xs sm:text-sm">
              {testimonial.role}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;