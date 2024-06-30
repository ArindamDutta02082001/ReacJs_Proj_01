
interface Person {
  name: string;
  imageId : string
}

export default function Avatar({ person, size }: { person: Person; size: number }) {
  return (
    <img
      className="avatar"
      src={
        "https://images.pexels.com/photos/26100664/pexels-photo-26100664/free-photo-of-a-young-male-deer.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      }
      alt={person.name}
      width={size}
      height={size}
    />
  );
}


/*

worst way of capturing props

interface Person {
  name: string;
  imageId : string
}

interface AvatarProps {
  person : Person;
  size : string
}

function Avatar(props : AvatarProps ) {
  let person = props.person;
  let size = props.size;
 
  }
*/