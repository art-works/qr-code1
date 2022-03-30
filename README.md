 **QR CODE GENERATOR** 
 ---
QR Code API allows the users to generate and display QR Codes by accepting any valid URL.

In Newsletters, the API generates a unique QR Code for each article, and upon scanning the QR Code present next to each article the user will be directed to its article link.

**How to Use the QR Code API**
---

**Basic GET request format**
```

https://enlpdc8rq7.execute-api.us-east-1.amazonaws.com/dev/qr?myurl= Your URL

```

**Usage in Newsletter XSLT code**
```

<img style="vertical-align: middle; width: 100px; height: 100px;">
<xsl:attribute name="src">https://enlpdc8rq7.execute-api.us-east-1.amazonaws.com/dev/qr?myurl=
    <xsl:value-of select="url" />
</xsl:attribute>
<xsl:attribute name="border">0</xsl:attribute>
</img>
```


**The above HTML example produces the following image (png file type):**

![image](https://user-images.githubusercontent.com/65538206/160749938-e1000114-77eb-427b-8093-70ce4b489342.png)
