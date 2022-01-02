let express=require('express')
const app=express()
let axios=require('axios')

app.get('/', async (req, res) => {
    

await axios.post('https://hooks.slack.com/services/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',
{
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Dainik Added new Stream *<https://dev.suruse.com:4000/nidhi/streams/33qOED/details|Development>*"
			}
		},
		{
			"type": "image",
			"image_url": "https://i1.wp.com/thetempest.co/wp-content/uploads/2017/08/The-wise-words-of-Michael-Scott-Imgur-2.jpg?w=1024&ssl=1",
			"alt_text": "inspiration"
		}
	]
})

res.send("ok")
})

app.listen(5000, () => console.log(`Server running at `));


