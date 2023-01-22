export default function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=86400');
  res.status(200).json({
    status: true,
    data: {
      userID: "1",
      userToken: "18dfade1-189e-41eb-9467-81eec6ed970a",
      userName: "Adel Ayman",
      email: "adelayman0000@gmail.com",
    },
    message: "Login done successfully",
  });
}
