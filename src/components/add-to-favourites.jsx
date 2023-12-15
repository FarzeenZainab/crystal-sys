import Icon from "@/components/icon";
import { Button } from "@/components/ui/button";

const AddToFavourites = () => {
  return (
    <Button className="absolute right-4 group" variant="icon" size="icon">
      <Icon name="Heart" className="group-hover:stroke-rose-500" />
    </Button>
  );
};

export default AddToFavourites;
