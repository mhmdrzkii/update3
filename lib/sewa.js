const fs = require("fs")
const toMs = require("ms")

/**
 * Add premium user.
 * @param {String} groupId
 * @param {String} expired
 * @param {Object} _dir
 */
const addSewaGrup = (groupId, expired, _dir) => {
  const cekUser = premium.find((group) => group.id == groupId)
  if (cekUser) {
    cekUser.expired = cekUser.expired + toMs(expired)
  } else {
    const obj = { id: groupId, expired: Date.now() + toMs(expired) }
    _dir.push(obj)
  }
  fs.writeFileSync("./database/sewa.json", JSON.stringify(_dir))
}

/**
 * Get premium user position.
 * @param {String} groupId
 * @param {Object} _dir
 * @returns {Number}
 */
const getSewaPosition = (groupId, _dir) => {
  let position = null
  Object.keys(_dir).forEach((i) => {
    if (_dir[i].id === groupId) {
      position = i
    }
  })
  if (position !== null) {
    return position
  }
}

/**
 * Get premium user expire.
 * @param {String} groupId
 * @param {Object} _dir
 * @returns {Number}
 */
const getSewaExpired = (groupId, _dir) => {
  let position = null
  Object.keys(_dir).forEach((i) => {
    if (_dir[i].id === groupId) {
      position = i
    }
  })
  if (position !== null) {
    return _dir[position].expired
  }
}

/**
 * Check user is premium.
 * @param {String} groupId
 * @param {Object} _dir
 * @returns {Boolean}
 */
const checkSewaGrup = (groupId, _dir) => {
  console.log("Checking sewa...")
  let status = false
  Object.keys(_dir).forEach((i) => {
    if (_dir[i].id === groupId) {
      status = true
    }
  })
  return status
}

/**
 * Constantly checking premium.
 * @param {Object} _dir
 */
const expiredCheck = (tio, msg, _dir) => {
  setInterval(() => {
    let position = null
    Object.keys(_dir).forEach((i) => {
      if (Date.now() >= _dir[i].expired) {
        position = i
      }
    })
    if (position !== null) {
      idny = _dir[position].id
      console.log(`Sewa expired: ${_dir[position].id}`)
      _dir.splice(position, 1)
      fs.writeFileSync("./database/sewa.json", JSON.stringify(_dir))
      idny
        ? tio.sendMessage(idny, {
            text: "Waktu sewa anda sudah habis, silahkan untuk membeli lagi.",
          })
        : ""
      idny = false
    }
  }, 1000)
}

/**
 * Get all premium user ID.
 * @param {Object} _dir
 * @returns {String[]}
 */
const getAllSewaGrup = (_dir) => {
  const array = []
  Object.keys(_dir).forEach((i) => {
    array.push(_dir[i].id)
  })
  return array
}

module.exports = {
  addSewaGrup,
  getSewaExpired,
  getSewaPosition,
  expiredCheck,
  checkSewaGrup,
  getAllSewaGrup,
}
