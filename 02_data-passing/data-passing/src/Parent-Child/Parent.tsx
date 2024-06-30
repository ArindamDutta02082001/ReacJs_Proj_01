import Avatar from "./Avatar";
import { ReactNode } from "react";

export default function Profile() {
  return (
    <>
      {" "}
      <div>
        <h5> Passing data from Parent to Child as normal Objects </h5>
        <Avatar
          size={100}
          person={{
            name: "Katsuko Saruhashi",
            imageId: "YfeOqp2",
          }}
        />
        <Avatar
          size={80}
          person={{
            name: "Aklilu Lemma",
            imageId: "OKS67lh",
          }}
        />
        <Avatar
          size={50}
          person={{
            name: "Lin Lanying",
            imageId: "1bX5QH6",
          }}
        />
      </div>
      <div>
        <h5> Passing data from Parent to Child as JSX or Component </h5>
        <Card>
          <Avatar
            size={100}
            person={{
              name: "Katsuko Saruhashi",
              imageId: "YfeOqp2",
            }}
          />
        </Card>
      </div>
    </>
  );
}

// another Card Component
function Card({ children }: { children: ReactNode }) {
  return <div className="card">{children}</div>;
}
