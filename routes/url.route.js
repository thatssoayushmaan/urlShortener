const express = require('express')
const validUrl = require('valid-url')
const shortid = require('shortid')

const router = express.Router()

const URL = require('../models/UrlModel')

const baseUrl = 'http:localhost:5000'

router.post('/shorten', async (req,res) => {
    const {longUrl} = req.body

    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json({
            success : false,
            data: 'Invalid Base URL'
        })
    }

    const urlCode = shortid.generate()

    if(validUrl.isUri(longUrl)){
        try {
            let url = await Url.findOne({
                longUrl
            })
            if(url){
                res.json({
                    success: true,
                    data: url
                })
            }else{
                const shortUrl = baseUrl + '/' + urlCode

                url = new URL({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                })

                await url.save()
                res.json({
                    success: true,
                    data: url
                })
            }
        } catch (err) {
            console.log(err)
            res.status(500).json('Server Error')
        }
    }else{
        res.status(401).json('Invalid longUrl')
    }
})

module.exports = router