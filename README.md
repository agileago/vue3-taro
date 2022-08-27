# 使用vue3-oop开发小程序

- vue3
- tsx + vue3-oop
- 依赖注入

## 开发

```shell
pnpm i
pnpm run dev
```

然后打开微信开发者工具查看

### 开发h5

```shell
pnpm run dev:h5
```

## 打包

类似vue-cli一样根据mode来加载环境变量

```shell
pnpm run dev --mode master
```

会加载 `.env.master` 环境变量


