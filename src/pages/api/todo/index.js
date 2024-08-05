import { createNewData, getAllData } from "../../../services/serviceOperations";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const data = await getAllData("TodoItem");

      if (!data || data.error || data === undefined) {
        throw new Error(data.error);
      }

      return res.status(200).json({ status: "success", data: data });
    } catch (error) {
      return res
        .status(500)
        .json({ status: "error", error: error.message, data: null });
    }
  }
   else if (req.method === "POST") {
    try {
      const body = await req.body;

      const data = await createNewData("TodoItem", body);

      if (!data || data.error) {
        throw new Error(data.error);
      }
      return res
        .status(200)
        .json({ status: "success", message: "api isteği başarılı" });
    } catch (error) {
      return res.status(500).json({ status: "error", error: error.message });
    }
  }
};

export default handler;
