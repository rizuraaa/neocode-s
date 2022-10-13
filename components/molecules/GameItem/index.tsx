import Image from "next/image";
import Link from "next/link";

export interface GameItemProps {
  thumbnail:
    | "/img/Thumbnail-1.png"
    | "/img/Thumbnail-2.png"
    | "/img/Thumbnail-3.png"
    | "/img/Thumbnail-4.png"
    | "/img/Thumbnail-5.png";
  title: string;
  category: string;
}

const GameItem = (props: GameItemProps) => {
  const { thumbnail, title, category } = props;
  return (
    <div className="featured-game-card position-relative">
      <Link href="/detail">
        <a>
          <div className="blur-sharp">
            <Image
              src={thumbnail}
              width={205}
              height={270}
              alt="thumbnail"
              className="thumbnail"
            />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <Image
                  src="/icon/controller.svg"
                  width={54}
                  height={36}
                  alt="controller"
                />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">{title}</p>
                <p className="fw-light text-white m-0">{category}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default GameItem;
