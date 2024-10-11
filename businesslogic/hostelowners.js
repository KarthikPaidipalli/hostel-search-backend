async function checkinghostelIsPreseent(username, password) {

    const hostelOwnerDetails = await db.hostelinfo.findOne({
        where: {
            username: username
        }
    });

    if (!customersDetails) {
        throw new Error(errormsg.NO_USER_PRESENT);
    }

    const passwordMatch = await bcrypt.compare(password, hostelOwnerDetails.password);

    if (!passwordMatch) {
        throw new Error(errormsg.PASSWORD_MISMATCH);
    }

    const token = jsontoken.sign({ username }, "auth123", { expiresIn: "30d" }); 
    
    customersDetails.token = token;

    await customersDetails.save();

    return token;
}

module.exports = {checkinghostelIsPreseent};