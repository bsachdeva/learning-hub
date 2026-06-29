import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CourseCard } from "@/components/CourseCard";

test("renders course card and triggers enroll", async () => {
  const course = { id: 1, name: "Test Course", description: "Test course details", level: "Beginner", duration: "1 week" };
  const onEnroll = vi.fn();
  render(<CourseCard course={course} onEnroll={onEnroll} />);
  await userEvent.click(screen.getByRole("button", { name: /Enroll/i }));
  expect(onEnroll).toHaveBeenCalledTimes(1);
});
