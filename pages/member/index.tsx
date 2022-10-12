import type { NextPage } from "next";
import OverviewContent from "../../components/organisms/OverviewContent";
import SideBar from "../../components/organisms/SideBar";

const Member: NextPage = () => {
  return (
    <section className="overview overflow-auto">
      <SideBar activeMenu="overview" />
      <OverviewContent />
    </section>
  );
};

export default Member;
