Building APIs with Node.js 读书笔记
================================

### 开发环境配置

```
yarn add babel-cli babel-preset-env express
```

`.babelrc`
```js
{
  "presets": ["env"]
}
```

src-restful-api/index.js
```js
import express from 'express'
const PORT = 3000
const app = express()
app.get('/',(req,res)=>res.json({status: 'NTask API'}))
app.listen(PORT, ()=>console.log(`NTask API - PORT ${PORT}`))
```

##### run
```bash
 yarn start ./src-restful-api/index.js
yarn start v0.21.3
$ babel-node ./src-restful-api/index.js
NTask API - PORT 3000
```

open http://u16041:3000/

`{"status":"NTask API"}`


