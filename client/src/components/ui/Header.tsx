import cn from "../../lib/classname";

interface IHeader {
  title: string;
  description?: string;

  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const Header = (props: IHeader) => {
  const {
    title,
    description,

    className,
    titleClassName,
    descriptionClassName,
  } = props;

  return (
    <div className={cn("flex items-center justify-between gap-1", className)}>
      <div>
        <p
          className={cn(
            "text-4xl font-medium font-italiana text-core-primary",
            titleClassName
          )}
        >
          {title}
        </p>
        {description && (
          <p className={cn("text-md text-neutral-600", descriptionClassName)}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;
