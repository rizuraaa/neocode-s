import Link from "next/link";

interface ListItemProps {
  text: string;
  href?: string;
}

const ListItem = (props: Partial<ListItemProps>) => {
  const { text, href = "/" } = props;
  return (
    <li className="mb-6">
      <Link href={href}>
        <a className="text-lg color-palette-1 text-decoration-none">{text}</a>
      </Link>
    </li>
  );
};

export default ListItem;
