import { useNavigate } from "react-router-dom";
import resepData from "../data/resepData";
import "./Main.css"; // buat file CSS sesuai kebutuhan

function Main() {
  const navigate = useNavigate();

  const handleKlikResep = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="grid-container">
      {resepData.map((resep) => (
        <div key={resep.id} className="grid-item">
          <img src={resep.gambar} alt={resep.nama} className="gambar-resep" />
          <h3>{resep.nama}</h3>
          <p>{resep.kategori}</p>
          <button onClick={() => handleKlikResep(resep.id)}>Klik Resep</button>
        </div>
      ))}
    </div>
  );
}

export default Main;
