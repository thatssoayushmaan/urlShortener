const express = require('express')

const router = express.Router()

const URL = require('../models/Url')

router.get('/:code',async (req,res) =>{
    try {
        const url = await URL.findOne({
            urlCode: req.params.code
        })

        if(url){
            return res.redirect(url.longUrl)
        }else{
            return res.status(404).json({
                success: true,
                data:"No URL Found"
            })
        }
    } catch (error) {
        console.error(err)
        res.status(500).json('Server Error')
    }
})

module.exports = router