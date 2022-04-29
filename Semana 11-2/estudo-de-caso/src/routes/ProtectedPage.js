import React from "react";
import { useEffect } from "react";
import { listPets } from "../services/pets";

function ProtectedPage() {
  useEffect(() => {
    const request = async () => {
      try {
        const response = await listPets();
        console.log(response.data);
      } catch (error) {
        console.log("Deu Ruim");
      }
    };
    request();
  }, []);

  return <div>ProtectedPage</div>;
}

export default ProtectedPage;
