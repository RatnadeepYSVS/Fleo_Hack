const categoryModel = require('../models/Head')
const costUnits = { "Ten": 10, "Hun": 100, "Th": 1000, "L": 100000, "Cr": 10000000 }
exports.createCategory = async(req, res) => {
    const { body } = req
    const { totalsales, targetsales } = body
    const [totalMoney, totalUnit] = totalsales.split(" ")
    const [targetMoney, targetUnit] = targetsales.split(" ")
    const totalSaleAmount = Number(totalMoney) * costUnits[totalUnit]
    const targetSaleAmount = Number(targetMoney) * costUnits[targetUnit]
    const percent = parseInt((totalSaleAmount / targetSaleAmount) * 100)
    const percentage = `${percent}%`
    let color, stats
    if (percent <= 33) {
        color = "red"
        stats = "At risk"
    } else if (percent > 33 && percent <= 66) {
        color = "yellow"
        stats = "Off track"
    } else {
        color = "green"
        stats = "On track"
    }
    const category = await categoryModel.create({...body, percentage, color, stats })
    return res.status(201).json({ msg: category })
}
exports.updateCategory = async(req, res) => {
    const { body } = req
    const { totalsales, targetsales } = body
    const { params } = req
    const { id } = params
    const categoryData = await categoryModel.findById(id)
    if (totalsales && targetsales) {
        const [totalMoney, totalUnit] = totalsales.split(" ")
        const [targetMoney, targetUnit] = targetsales.split(" ")
        const totalSaleAmount = Number(totalMoney) * costUnits[totalUnit]
        const targetSaleAmount = Number(targetMoney) * costUnits[targetUnit]
        const percent = parseInt((totalSaleAmount / targetSaleAmount) * 100)
        let percentage, color, stats
        percentage = `${percent}%`
        if (percent <= 33) {
            color = "red"
            stats = "At risk"
        } else if (percent > 33 && percent <= 66) {
            color = "yellow"
            stats = "Off track"
        } else {
            color = "green"
            stats = "On track"
        }
        const updatedData = await categoryModel.findByIdAndUpdate(id, {...body, percentage, color, stats, targetsales, totalsales }, { new: true, runValidators: true })
        return res.status(201).json({ msg: updatedData })
    } else if (targetsales) {
        const { totalsales } = categoryData
        const [totalMoney, totalUnit] = totalsales.split(" ")
        const [targetMoney, targetUnit] = targetsales.split(" ")
        const totalSaleAmount = Number(totalMoney) * costUnits[totalUnit]
        const targetSaleAmount = Number(targetMoney) * costUnits[targetUnit]
        const percent = parseInt((totalSaleAmount / targetSaleAmount) * 100)
        let percentage, color, stats
        percentage = `${percent}%`
        if (percent <= 33) {
            color = "red"
            stats = "At risk"
        } else if (percent > 33 && percent <= 66) {
            color = "yellow"
            stats = "Off track"
        } else {
            color = "green"
            stats = "On track"
        }
        const updatedData = await categoryModel.findByIdAndUpdate(id, {...body, percentage, color, stats, targetsales }, { new: true, runValidators: true })
        return res.status(201).json({ msg: updatedData })
    } else if (totalsales) {
        const { targetsales } = categoryData
        const [totalMoney, totalUnit] = totalsales.split(" ")
        const [targetMoney, targetUnit] = targetsales.split(" ")
        const totalSaleAmount = Number(totalMoney) * costUnits[totalUnit]
        const targetSaleAmount = Number(targetMoney) * costUnits[targetUnit]
        const percent = parseInt((totalSaleAmount / targetSaleAmount) * 100)
        let percentage, color, stats
        percentage = `${percent}%`
        if (percent <= 33) {
            color = "red"
            stats = "At risk"
        } else if (percent > 33 && percent <= 66) {
            color = "yellow"
            stats = "Off track"
        } else {
            color = "green"
            stats = "On track"
        }
        const updatedData = await categoryModel.findByIdAndUpdate(id, {...body, percentage, color, stats, totalsales }, { new: true, runValidators: true })
        return res.status(201).json({ msg: updatedData })
    } else {
        const updatedData = await categoryModel.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        return res.status(201).json({ msg: updatedData })
    }
}
exports.createChild = async(req, res) => {
    const { body } = req
    const { parentId } = body
    const { totalsales, targetsales } = body
    const [totalMoney, totalUnit] = totalsales.split(" ")
    const [targetMoney, targetUnit] = targetsales.split(" ")
    const totalSaleAmount = Number(totalMoney) * costUnits[totalUnit]
    const targetSaleAmount = Number(targetMoney) * costUnits[targetUnit]
    const percent = parseInt((totalSaleAmount / targetSaleAmount) * 100)
    const percentage = `${percent}%`
    let color, stats
    if (percent <= 33) {
        color = "red"
        stats = "At risk"
    } else if (percent > 33 && percent <= 66) {
        color = "yellow"
        stats = "Off track"
    } else {
        color = "green"
        stats = "On track"
    }
    const category = await categoryModel.create({...body, percentage, color, stats, parent: parentId })
    return res.status(201).json({ msg: category })
}
exports.getChildren = async(req, res) => {
    const { params } = req
    const { id } = params
    const data = await categoryModel.find()
    const children = data.filter(i => i.parent == id)
    res.status(200).json({ msg: children })
}