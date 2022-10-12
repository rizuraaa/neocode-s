import Image from "next/image";
import cx from "classnames";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  icon:
    | "overview"
    | "transaction"
    | "messages"
    | "card"
    | "reward"
    | "setting"
    | "logout";
  active?: boolean;
  href: string;
}

const MenuItem = (props: Partial<MenuItemProps>) => {
  const { title, icon, active, href = "/member" } = props;

  const classMenu = cx({
    item: true,
    "mb-30": true,
    active,
  });
  return (
    <div className={classMenu}>
      <div className="me-3">
        <Image src={`/icon/ic-menu-${icon}.svg`} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        <Link href={href}>
          <a href="" className="text-lg text-decoration-none">
            {title}
          </a>
        </Link>
      </p>
    </div>
  );
};

export default MenuItem;
