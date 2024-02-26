// ==UserScript==
// @name         EH MPV Dou & Trans
// @namespace    http://tampermonkey.net/
// @version      2024-01-11
// @description  try to take over the world!
// @author       You
// @match        https://exhentai.org/mpv/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=exhentai.org
// @grant                GM_getValue
// @grant                GM_setValue
// @grant GM_xmlhttpRequest
// ==/UserScript==

(function () {
  var transIcon =
    "data:image/png;base64,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";

  var style = document.createElement("style");
  style.textContent = `
  #pane_images {
    overflow: scroll !important;
  }
  
  
  body.dou #pane_images_inner {
    direction: rtl;
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: column;
    height: auto !important;
  }
  body.dou #pane_images_inner > * {
    direction: initial;
  }
  
  body.dou #pane_images_inner .mimg > a[href] > img {
    max-width: 100% !important;
    height: auto;
  }
  
  body.dou #pane_images_inner .mimg:nth-of-type(odd) {
    justify-self: left;
  }
  
  body.dou #pane_images_inner .mimg:nth-of-type(odd),
  body.dou #pane_images_inner > a:nth-of-type(odd) {
    grid-column: 1;
  }
  
  body.dou #pane_images_inner .mimg:nth-of-type(even),
  body.dou #pane_images_inner > a:nth-of-type(even) {
    grid-column: 2;
  }
  `;
  document.head.appendChild(style);

  unsafeWindow.__defineGetter__("dou", (_) =>
    document.body.classList.contains("dou")
  );

  let bar3 = Array.from(document.getElementById("bar3").children);
  let btnBk = bar3.find((x, i) => !x.style.opacity && i > 1);
  btnBk.attributes["onclick"].value =
    "dou?dou=false:" + btnBk.attributes["onclick"].value;
  [2, 3, 4].forEach((x) => {
    let b = bar3[x];
    if (b != btnBk)
      b.attributes["onclick"].value =
        `GM_setValue("en", false),` + b.attributes["onclick"].value;
  });

  unsafeWindow.renewing = null;
  load_image_dispatch = (a) => {
    var x = imagelist[a - 1].xhr;
    var b = !1;
    if (4 == x.readyState)
      if (200 == x.status)
        if (((x = JSON.parse(x.responseText)), void 0 != x.login))
          top.location.href = login_url;
        else b = x;
      else force_reload(a);
    0 != b &&
      (void 0 != b.error
        ? force_reload(a)
        : ((imagelist[a - 1].i = b.i),
          (imagelist[a - 1].s = b.s),
          (imagelist[a - 1].d = b.d),
          (imagelist[a - 1].o = b.o),
          (imagelist[a - 1].ll = b.ll),
          (imagelist[a - 1].ls = b.ls),
          (imagelist[a - 1].lf = b.lf),
          (imagelist[a - 1].lo = b.lo),
          (imagelist[a - 1].xres = b.xres),
          (imagelist[a - 1].yres = b.yres),
          load_image(a)),
      (imagelist[a - 1].xhr = void 0));

    async function force_reload(a) {
      console.log("Error loading image: " + a);
      if (!renewing) renewing = renwesecret();
      await renewing;
      action_reload(a);

      async function renwesecret() {
        let delay = 5000;
        while (true) {
          try {
            const response = await fetch(location);
            if (response.ok) {
              let doc =
                document.implementation.createHTMLDocument("New Document");
              doc.write(await response.text());
              doc.close();

              window.eval(doc.scripts[1].textContent);

              renewing = null;
              return;
            } else {
              await new Promise((resolve) => setTimeout(resolve, delay));
            }
          } catch (error) {
            console.error("Error during fetch:", error);
            await new Promise((resolve) => setTimeout(resolve, delay));
          }
        }
      }
    }
  };

  unsafeWindow.eval(
    rescale_image
      .toLocaleString()
      .replace(`;if(always_scale`, `;if(dou)c/=2` + ";if(always_scale")
      .replace(
        "c=0;",
        "if(dou){let r=window.innerHeight/e;if(r<1)(r>0.75)?(d=Math.round(d*r),e=window.innerHeight):(d*=0.75,e*=0.75)}" +
          "c=0;"
      )
      .replace(`e+"px"`, `dou?'':` + `e+"px"`)
  );
  unsafeWindow.eval(
    update_window_extents.toLocaleString().replace(`0!=b`, `b&&` + `0!=b`)
  );
  unsafeWindow.eval(
    preload_generic.toLocaleString().replace(`if(k<d-`, `if(!e)` + `if(k<d-`)
  );
  unsafeWindow.eval(
    force_reload.toLocaleString().replace(`alert`, `console.log`)
  );
  unsafeWindow.image_trans = async (a, o) => {
    let target = document.getElementById("imgsrc_" + a);
    let tb = document.querySelector("#image_" + a + " [onload]");
    if (target.transing) return;
    if (isBlobUrlRe.test(target.src))
      if (o) return;
      else target.src = target.realsrc;
    else {
      target.realsrc = target.src;
      target.transing = true;
      tb.style.backgroundColor = "yellowgreen";
      try {
        target.src = await cotransTranslation(target);
      } catch (error) {
        console.log(error);
      }
      tb.style.backgroundColor = null;
      target.transing = void 0;
      delete target.transing;
    }
  };
  unsafeWindow.transAll = false;
  var transBtn =
    `<div><a title="" style=""><img title="" onload="transAll && (transList.push(' + a + '), setTimeout(_ => listTrans(), 50))" onclick="image_trans(' + a + ')" style="width: 21px; height: 21px;" src="` +
    transIcon +
    `"></a></div> \t`;
  unsafeWindow.eval(
    load_image
      .toLocaleString()
      .replace(
        '</div> \\t<div><a href="',
        "</div> \\t" + transBtn + '<div><a href="'
      )
  );
  var tAllBtn = document.createElement("img");
  tAllBtn.id = "∀";
  tAllBtn.src = transIcon;
  tAllBtn.style.marginTop = "20px";
  tAllBtn.style.height = "24px";
  tAllBtn.style.width = "24px";
  tAllBtn.title = "Trans ∀";
  unsafeWindow.transList = [];
  unsafeWindow.transing = false;
  unsafeWindow.listTrans = async (_) => {
    if (transing) return;
    transing = true;
    let tb = document.getElementById("∀");
    tb.style.backgroundColor = "yellowgreen";
    while (transList.length) {
      if (!transAll) break;
      try {
        await image_trans(transList.shift(), true);
      } catch (e) {}
    }
    tb.style.backgroundColor = null;
    transing = false;
  };
  tAllBtn.onclick = (_) => {
    transAll = !transAll;
    if (transAll) {
      if (transing) return;
      for (let f = 1; f <= pagecount; f++) {
        if (document.getElementById("imgsrc_" + f)) transList.push(f);
      }
      listTrans();
    }
  };
  preload_scroll_images = (_) => {
    preload_generic(pane_images, "image", Number.MAX_VALUE);
    sync_thumbpane();
  };
  pane_images.onscroll = preload_scroll_images;

  var douBtn = document.createElement("img");
  douBtn.src =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAVCAYAAABc6S4mAAAAU0lEQVQ4T2NkAIK37979B9H4gLCQECOyPLF6wJqIVTx4LSAUPJTIo4QrJQbh0ksfC4Z+JNPcB7SIXJiZ9IlkmvuA5nEw9C2geRwMfQuGfiTT0gcAqSlgFi2fi9oAAAAASUVORK5CYII=";
  douBtn.style.marginTop = "5px";
  douBtn.style.opacity = 0.5;
  douBtn.title = "DOU, Scale To Fit";
  douBtn.onclick = (_) => ((dou = true), (btnBk.style.opacity = 0.5));

  unsafeWindow.__defineSetter__("dou", (d) => {
    if (d == dou) return;
    GM_setValue("en", !!d);

    var st = pane_images.scrollTop + window.innerHeight / 2;
    var cp;
    for (var f = 1; f <= pagecount; f++) {
      var g = document.getElementById("image_" + f),
        h = g.offsetTop,
        k = h + g.offsetHeight;
      if ("visible" == g.style.visibility) {
        k >= st && h <= st && ((cp = g), (currentpage = f));
      }
    }

    d
      ? (document.body.classList.add("dou"),
        (douBtn.style.opacity = ""),
        (btnBk.style.opacity = 0.5))
      : (document.body.classList.remove("dou"),
        (douBtn.style.opacity = 0.5),
        (btnBk.style.opacity = ""));
    update_window_extents_delayed();
    cp?.scrollIntoView();
    setTimeout((_) => {
      cp?.scrollIntoView();
      sync_thumbpane();
    }, 30);
  });

  dou = GM_getValue("en");
  if (dou) location.hash = location.hash;

  document
    .getElementById("bar3")
    .insertBefore(tAllBtn, document.getElementById("bar3").children[2]);
  document
    .getElementById("bar3")
    .insertBefore(douBtn, document.getElementById("bar3").children[5]);
})();

const renewsrc = async (img) => {
  let a = Number(img.id.replace("imgsrc_", ""));
  return new Promise((resolve, reject) => {
    document.getElementById("image_" + a).addEventListener(
      "load",
      (_) => {
        resolve();
        document
          .getElementById("image_" + a)
          .removeEventListener("load", arguments.callee);
      },
      true
    );
    action_reload(a);
  });
};
const isBlobUrlRe = /^blob:/;
const request = (url, details) =>
  new Promise((resolve, reject) => {
    if (typeof GM_xmlhttpRequest === "undefined")
      throw new Error("pwa.alert.userscript_not_installed");
    GM_xmlhttpRequest({
      method: "GET",
      url,
      headers: {
        Referer: window.location.href,
      },
      ...details,
      onload: resolve,
      onerror: reject,
      ontimeout: reject,
    });
  });
const download = async (url) => {
  if (isBlobUrlRe.test(url)) {
    const res = await fetch(url);
    return res.blob();
  }
  const res = await request(url, {
    responseType: "blob",
  });
  if (res.status != 200) throw new Error();
  return res.response;
};
const createFormData = (imgBlob) => {
  const file = new File([imgBlob], `image.${imgBlob.type.split("/").at(-1)}`, {
    type: imgBlob.type,
  });
  const formData = new FormData();
  formData.append("file", file);
  formData.append("mime", file.type);
  formData.append("size", "L");
  formData.append("detector", "ctd");
  formData.append("direction", "auto");
  formData.append("translator", "gpt3.5");
  formData.append("tgt_lang", "CHS");
  formData.append("target_language", "CHS");
  formData.append("retry", "false");
  return formData;
};

/** 等待翻译完成 */
const waitTranslation = (id) => {
  if (!id) throw new Error("translation.tip.id_not_returned");
  const ws = new WebSocket(`wss://api.cotrans.touhou.ai/task/${id}/event/v1`);
  return new Promise((resolve, reject) => {
    ws.onmessage = (e) => {
      const msg = JSON.parse(e.data);
      switch (msg.type) {
        case "result":
          resolve(msg.result.translation_mask);
          break;
        case "pending":
          break;
        case "status":
          break;
        case "error":
          reject(new Error(msg.error_id));
          break;
        case "not_found":
          reject(new Error("translation.tip.error"));
          break;
      }
    };
  });
};

/** 将翻译后的内容覆盖到原图上 */
const mergeImage = async (rawImage, maskUri) => {
  const canvas = document.createElement("canvas");
  const canvasCtx = canvas.getContext("2d");
  const img = new Image();
  img.src = URL.createObjectURL(rawImage);
  await new Promise((resolve, reject) => {
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      canvasCtx.drawImage(img, 0, 0);
      resolve(null);
    };
    img.onerror = reject;
  });
  const img2 = new Image();
  img2.src = maskUri;
  img2.crossOrigin = "anonymous";
  await new Promise((resolve) => {
    img2.onload = () => {
      canvasCtx.drawImage(img2, 0, 0);
      resolve(null);
    };
  });
  const translated = await new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(blob);
    }, "image/png");
  });
  return URL.createObjectURL(translated);
};

/** 缩小过大的图片 */
const resize = async (blob, w, h) => {
  if (w <= 4096 && h <= 4096) return blob;
  const img = new Image();
  img.src = URL.createObjectURL(blob);
  await new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = reject;
  });
  if (w <= 4096 && h <= 4096) return blob;
  const scale = Math.min(4096 / w, 4096 / h);
  const width = Math.floor(w * scale);
  const height = Math.floor(h * scale);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(img, 0, 0, width, height);
  URL.revokeObjectURL(img.src);
  return new Promise((resolve, reject) => {
    canvas.toBlob((newBlob) =>
      newBlob ? resolve(newBlob) : reject(new Error("Canvas toBlob failed"))
    );
  });
};

/** 使用 cotrans 翻译指定图片 */
const cotransTranslation = async (img) => {
  let imgBlob;
  try {
    imgBlob = await download(img.src);
  } catch (error) {
    try {
      await renewsrc(img);
      imgBlob = await download(img.realsrc);
    } catch (error) {
      throw new Error("translation.tip.download_img_failed");
    }
  }
  try {
    imgBlob = await resize(imgBlob, img.width, img.height);
  } catch (error) {
    throw new Error("translation.tip.resize_img_failed");
  }
  let res;
  try {
    res = await request("https://api.cotrans.touhou.ai/task/upload/v1", {
      method: "POST",
      data: createFormData(imgBlob),
      headers: {
        Origin: "https://cotrans.touhou.ai",
        Referer: "https://cotrans.touhou.ai/",
      },
    });
  } catch (error) {
    throw new Error("translation.tip.upload_error");
  }
  let resData;
  try {
    resData = JSON.parse(res.responseText);
  } catch (_) {
    throw new Error(res.responseText);
  }
  if ("error_id" in resData) throw new Error(resData.error_id);
  const translation_mask =
    resData.result?.translation_mask || (await waitTranslation(resData.id));
  return mergeImage(imgBlob, translation_mask);
};
const cotransTranslators = [
  "google",
  "youdao",
  "baidu",
  "deepl",
  "gpt3.5",
  "offline",
  "none",
];
