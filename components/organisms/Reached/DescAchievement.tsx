interface DescAchievementProps {
  desc: string;
  subDesc: string;
}
const DescAchievement = (props: DescAchievementProps) => {
  const { desc, subDesc } = props;
  return (
    <>
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
        {desc}
      </p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">
        {subDesc}
      </p>
    </>
  );
};

export default DescAchievement;
