 const Mehfil = require('../models/mehfilModel');

// Create Product
exports.createMehfil = (req,res)=> {
    
    const mehfil = Mehfil.create(req.body);

    res.status(201).json({
        status: true,
        mehfil
    })
}

exports.getAllMehfil = (req, res) => {
    const mehfilCount = await Mehfil.countDocuments();
    
    res.status(200).json({
        success: true,
        mehfils,
        mehfilCount,
        filteredMehfilsCount,
        });
}