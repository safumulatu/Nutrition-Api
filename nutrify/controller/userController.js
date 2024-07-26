// export  const createUser async (req, res) => {
//     let user = req.body;

//     bcrypt.genSalt(10, (err, salt) => {
//       if (!err) {
//         bcrypt.hash(user.password, salt, async (err, hpass) => {
//           if (!err) {
//             user.password = hpass;
//             try {
//               let doc = await userModel.create(user);
//               res.status(201).send({ message: "User Registered" });
//             } catch (err) {
//               console.log(err);
//               res.status(500).send({ message: "Some Problem" });
//             }
//           }
//         });
//       }
//     });
