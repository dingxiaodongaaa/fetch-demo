const GETGENERATOR = baseURL => {
    return async (url, params) => {
        // 参数校验
        if (!url) {
            throw new Error("url is required")
            return
        }

        let _url = url
        // 判断参数对象是够为空
        if (params && Object.keys(params).length > 0) {
            _url += '?'
            for (let item in params) {
                _url += `${item}=${params[item]}&`
            }
            _url.substring(0, date.length - 1);
        }

        try {
            let response = await fetch(baseURL + _url, {
                credentials: 'include',
                method: 'GET'
            })

            return response.json()
        } catch (err) {
            console.log(err)
        }
    }
}
const POSTGENERATOR = baseURL => {
    return async (url, params) => {
        // 参数校验
        if (!url) {
            throw new Error("url is required")
            return
        }

        try {
            let response = await fetch(baseURL + url, {
                credentials: 'include',
                method: 'POST',
                headers: {
                    'user-agent': 'Mozilla/4.0 MDN Example',
                    'content-type': 'application/json'
                },
                body:params?JSON.stringify(params):null,
            })

            return response.json()
        } catch (err) {
            console.log(err)
        }
    }
}

const fetchAPI = baseURL => ({
    POST: POSTGENERATOR(baseURL),
    GET: GETGENERATOR(baseURL)
})

export default fetchAPI