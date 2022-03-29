const {Router} = require('express')
const { redirect } = require('express/lib/response')
const card = require('../models/card')
const consult = require('../models/consult')
const contributions = require('../models/contributions')
const credit = require('../models/credit')
const lising = require('../models/lising')
const consultPop = require('../models/consultPop')
const router = Router()

router.get('/',(req, res) =>{
    res.render('index',{
        title: 'Главная',
    })
})

router.get('/cards',(req, res) =>{
    res.render('cards',{
        title: 'Карты',
    })
})

router.get('/credits',(req, res) =>{
    res.render('credits',{
        title: 'Кредиты',
    })
})

router.get('/lising',(req, res) =>{
    res.render('lising',{
        title: 'Лизинги',
    })
})

router.get('/contributions',(req, res) =>{
    res.render('contributions',{
        title: 'Вклады',
    })
})

router.get('/about',(req, res) =>{
    res.render('about',{
        title: 'О банке',
    })
})

router.get('/rules', (req, res) =>{
    res.render('rules',{
        title: 'Правила пользования банковскими картами'
    })
})

router.get('/limits', (req, res) =>{
    res.render('limits',{
        title: 'Лимиты по транзакциям'
    })
})

router.get('/payKr', (req, res) =>{
    res.render('payKr',{
        title: 'Как оплатить кредит?'
    })
})

router.get('/klient', (req, res) =>{
    res.render('klient',{
        title: 'Клиентам MANYBANK'
    })
})

router.get('/guarantees', (req, res) =>{
    res.render('guarantees',{
        title: 'Гарантии'
    })
})

router.get('/guarantees_answers', (req, res) =>{
    res.render('guarantees_answers',{
        title: 'Гарантии'
    })
})

router.get('/tariffs', (req, res) =>{
    res.render('tariffs',{
        title: 'Тарифы и условия'
    })
})

router.get('/lising_answers', (req, res) =>{
    res.render('lising_answers',{
        title: 'Вопрос-ответ'
    })
})


router.post('/RegCard', async (req, res) =>{
    const RCard = new card({
        Name: req.body.CardFIO, 
        Phone: req.body.CardPhone,
        TypeOfCard: req.body.TypeOfCard
    })
    await RCard.save()
    
    
    res.render('acceptCard',{
        title: 'Заявка принята',
    })
})

router.post('/RegCred', async (req, res) =>{
    const RCred = new credit({
        Name: req.body.CredFIO, 
        Phone: req.body.CredPhone,
        Mail: req.body.CredMail
    })
    await RCred.save()

    res.render('acceptCredit',{
        title: 'Заявка принята',
    })
})

router.post('/RegLising', async (req, res) =>{
    const RLising = new lising({
        Name: req.body.LisingFIO, 
        Phone: req.body.LisingPhone,
    })
    await RLising.save()
    res.render('acceptLing',{
        title: 'Заявка принята',
    })
})

router.post('/RegContr', async (req, res) =>{
    const RCont = new contributions({
        Name: req.body.ContrFIO, 
        Phone: req.body.ContrPhone,
    })
    await RCont.save()
    res.render('acceptContr',{
        title: 'Заявка принята',
    })
})

router.post('/RegConsult', async (req, res) =>{
    const RConsult = new consult({
        Name: req.body.ConsultName, 
        Phone: req.body.ConsultPhone,
        Mail: req.body.ConsultMail,
        Topic: req.body.ConsultTopic,
        Message: req.body.ConsultMessage
    })
    await RConsult.save()
    res.redirect('/')
})

router.post('/RegConsultPop', async (req, res) =>{
    const RConsultPop = new consultPop({
        Name: req.body.ConsultNamePop, 
        Phone: req.body.ConsultPhonePop,
        Mail: req.body.ConsultMailPop,
    })
    await RConsultPop.save()
    res.redirect('/')
})


module.exports = router