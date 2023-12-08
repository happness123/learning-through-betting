# apple IPA签名以安装未上架app store 商店的软件

## **什么是ipa签名？**

ipa签名是用企业帐户打包苹果安装包( IPA )的过程，表示为数字签名。这是基于非对称加密算法实现的，意味着使用苹果公司帐户打包In House版的IPA文件，然后苹果公司帐户批准并发送此数据给其他人。ipa签名的本质是安装包的许可过程，在ios系统上安装需要许可证。如果APP不支持上架APP Store，请考虑使用ipa签名许可APP。

## **为什么需要ipa签名？**

苹果对设备有严格的使用限制，任何APP应用程序都必须从APP Store下载安装。因此，无法在未解密的设备上直接安装IPA文件。但是，苹果还提供了开发人员机制，可以在指定的设备上安装IPA文件进行测试和开发，该机制的核心是开发者许可证。

## 自签和超级签

### 使用 Apple ID 签名方法![IMG_256](https://picstore-of-ambi.oss-cn-shanghai.aliyuncs.com/img/clip_image002.jpg)

选择“使用 Apple ID 签名 - 添加 Apple ID”，随后输入用于签名的 Apple ID、密码并选择或输入对应设备的设备标识（指签名后 IPA 文件要安装的设备）；

![IMG_257](https://picstore-of-ambi.oss-cn-shanghai.aliyuncs.com/img/clip_image004.jpg)

检查无误后点击“确定”。建议操作前需要将 iOS 设备连接至爱思助手，并保证可以读出“设备标识”，如果未连接设备，需要手动输入设备标识。Apple ID 添加完成后下方列表就会显示签名信息；

![IMG_258](https://picstore-of-ambi.oss-cn-shanghai.aliyuncs.com/img/clip_image006.jpg)

之后，添加需要签名的 IPA 文件并勾选 IPA 文件和用于签名的 Apple ID，点击“开始签名”即可。签名成功后就可以通过爱思助手安装该应用了。安装完成后，在 iOS 设备上首次打开前记得去“设置 - 通用 - 描述文件”内信任该应用。



还不会的话看这个https://www.bilibili.com/video/av286940268/

签名失败等情况，先查一下是否有apple ID双重认证 如果有解除双重认证

## 超级签的方式 有效期一年

![IMG_259](https://picstore-of-ambi.oss-cn-shanghai.aliyuncs.com/img/clip_image008.jpg)

 

 

 

**第二种方法**

请自行选择在或者自己百度找个超级签名的网站花10多元选择超级签名 上传本站IPA文件等待签名成功后 打开链接下载

**![IOS超级签方法](https://picstore-of-ambi.oss-cn-shanghai.aliyuncs.com/img/clip_image012.jpg)**