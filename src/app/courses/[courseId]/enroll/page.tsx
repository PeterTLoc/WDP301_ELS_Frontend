import { getCourseById } from "@/services/courseService";
import { notFound } from "next/navigation";
import EnrollButton from "@/components/course/enroll/EnrollButton";
import CourseContent from "@/components/course/enroll/CourseOverview";

export default async function Page({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const course = await getCourseById(courseId);
  if (!course) notFound();

  return (
    <div>
      {/* Gradient Background Section */}
      <div className="relative">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0063B1] to-[#202020] z-0" />

        {/* Main Content */}
        <div className="relative z-20 pt-[86px] pb-10">
          <div className="max-w-[1000px] mx-auto flex flex-col gap-6">
            <h1 className="font-bold text-4xl">{course.name}</h1>

            <div className="flex text-md gap-1">
              <p className="px-2 py-1 bg-[#2B2B2B] border border-[#1D1D1D] rounded-[5px]">
                Level {course.level}
              </p>
              <p className="px-2 py-1 bg-[#2B2B2B] border border-[#1D1D1D] rounded-[5px]">
                {course.totalLessons} Lessons
              </p>
            </div>

            <p className="text-md">{course.description}</p>

            <div>
              <EnrollButton courseId={course._id} />
            </div>
          </div>
        </div>
      </div>

      {/* Separate Section Below Gradient */}
      <div className="px-5">
        <div className="max-w-[1000px] mx-auto mb-16">
          <CourseContent courseId={course._id} />
        </div>
      </div>
    </div>
  );
}
