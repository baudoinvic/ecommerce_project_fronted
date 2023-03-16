import { useNavigate } from "react-router-dom";

const CategoryItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "space-between",
        width: "60rem",
        height: "18rem",
        margin: "1rem",
        padding: "1rem",
        backgroundColor: "#EEEEEE",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "10rem",
        }}
        src={item.img}
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          textDecoration: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => navigate(`/products/${item.cat}`)}
      >
        <div>
          <p
            style={{
              width: "10rem",
              color: "#393E46",
              fontSize: "1.1rem",
              fontWeight: "bold",
              textDecoration: "none",
              margin: "0.8rem",
            }}
          >
            {item.title}
          </p>
          <button
            style={{
              backgroundColor: "#00ADB5",
              color: "#EEEEEE",
              width: "10rem",
              height: "2rem",
              border: "none",
              margin: "0.8rem",
              cursor: "pointer",
            }}
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
