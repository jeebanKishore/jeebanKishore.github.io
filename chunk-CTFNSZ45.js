import{a as Y,b as J,c as Q,d as Z,i as ut,j as yt}from"./chunk-SNZ3RKUF.js";import{a as Mt,b as ft,c as Pt,d as Ot}from"./chunk-ZSCNHLZL.js";import{a as it,b as gt,c as mt,d as pt,e as ht,f as x}from"./chunk-2LXMLY2T.js";import"./chunk-HD3VZZTZ.js";import{a as $,b as X,c as K,e as tt,f as et}from"./chunk-DZL2HPZF.js";import{a as bt,b as Ct,c as _t}from"./chunk-Q4YRH3MP.js";import"./chunk-GJTHFYAL.js";import"./chunk-SNXVZCAO.js";import"./chunk-U4U3MCI2.js";import"./chunk-ZOA7PFM3.js";import{a as nt,b as ot,d as ct,i as st,n as lt,u as dt}from"./chunk-QIZVHMJJ.js";import{l as q,na as at,qa as rt}from"./chunk-MAIIBS6V.js";import"./chunk-IYG2E4GL.js";import{$b as W,A as D,Bb as U,Cb as T,Db as j,Dc as A,Eb as p,Fb as a,Gb as i,Hb as f,Ob as C,R,Sa as P,Tb as h,Vb as l,Xa as c,Zb as B,_b as N,ba as L,dc as I,e as E,eb as k,fc as _,ga as u,ha as b,hc as s,ic as O,jc as H,kb as F,nb as V,oa as G,sa as M,tc as y,vc as v,xb as S,yb as g,zb as m}from"./chunk-QZ6JFUTB.js";import"./chunk-HZ6M6AS2.js";var xt=`
<div class="help-content-container flex-column" style="gap: 2rem;">
  
  <div class="user-guide-section">
    <h2 class="section-title">\u{1F3A8} How to Use the Digitizer</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      Transform your flat images into physical embroidery files right in your browser. Here is how to get the best results:
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="guide-step">
        <h3 class="subsection-title">1. Upload & Prepare \u{1F5BC}\uFE0F</h3>
        <p class="body-text">
          Start by uploading a clear, high-contrast image. Logos, flat vectors, and simple illustrations work best. The tool will automatically scale the image to optimize processing.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">2. Dial in the Settings \u{1F39B}\uFE0F</h3>
        <ul class="body-text" style="padding-left: 1.5rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
          <li><strong>Colors:</strong> Choose how many thread colors (2-16) the AI should look for. Less is usually cleaner.</li>
          <li><strong>Density:</strong> Controls how tightly the stitches are packed. 1 is solid/dense, 5 is loose.</li>
          <li><strong>Fill Angle:</strong> Set the stitch direction, or leave it on <em>Auto</em> to let the algorithm calculate the optimal angle based on the shape's geometry.</li>
          <li><strong>Underlay:</strong> Check this to generate a foundational layer of stitches that stabilizes the fabric before the main color is applied.</li>
        </ul>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">3. Process & Preview \u{1F680}</h3>
        <p class="body-text">
          Hit "Process Image". The canvas will trace out exactly how the embroidery machine will stitch your design, layer by layer. Use the simulation controls below the canvas to adjust playback speed or toggle travel stitches.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">4. Refine the Sequence \u2195\uFE0F</h3>
        <p class="body-text">
          In the <strong>Thread Breakdown</strong> card, you can click and drag layers to change the stitching order. Notice an unwanted background layer? Just click the red trash can \u{1F5D1}\uFE0F to delete it. The preview and final file will update instantly!
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">5. Download .DST \u{1F4BE}</h3>
        <p class="body-text">
          Once you are happy with the simulation, click "Download .DST" to export the industry-standard Tajima format, ready to be loaded onto your embroidery machine.
        </p>
      </div>
    </div>
  </div>

  <hr style="border: none; border-top: 1px solid var(--glass-border); margin: 0;">

  <div class="engineering-section">
    <h2 class="section-title">\u2699\uFE0F Engineering Behind the Scenes</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      This tool operates entirely client-side. No images or files are ever sent to a server. Here is how the magic happens in your browser:
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="engineering-card">
        <h3 class="subsection-title">OpenCV Color Clustering \u{1F3AF}</h3>
        <p class="body-text">
          When you process an image, a WebAssembly build of <strong>OpenCV</strong> performs K-Means clustering. It groups millions of pixels into the exact number of thread colors you requested, separating the image into distinct binary masks for each layer.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Rust & WebAssembly Integration \u{1F980}</h3>
        <p class="body-text">
          Generating thousands of stitch coordinates requires heavy math. A custom-built <strong>Rust</strong> program\u2014compiled to WebAssembly (WASM)\u2014receives the image masks. It calculates contours, optimal fill angles via image moments, variable-width satin borders, and handles the bitwise encoding required by the legacy Tajima <strong>.dst<strong> format.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Web Worker Multithreading \u{1F9F5}</h3>
        <p class="body-text">
          To prevent the UI from freezing during these intense calculations, the Rust WASM module runs inside an isolated <strong>Web Worker</strong>. It processes layers in the background and posts the binary stitch data back to the main thread.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Instant Array Manipulation \u26A1</h3>
        <p class="body-text">
          When you drag-and-drop to reorder layers (powered by Angular CDK), the app doesn't recalculate the stitches. It simply rearranges the pre-calculated <code>Uint8Array</code> byte buffers in memory and instantly re-merges them into a fresh <code>.dst</code> file, achieving zero-latency UI updates.
        </p>
      </div>
    </div>
  </div>

</div>
`,wt=`
<div class="help-content-container flex-column" style="gap: 2rem;">
  
  <div class="user-guide-section">
    <h2 class="section-title">\u{1FA84} How to Use the Magic Remover</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      Achieve zero-click background removal or take manual control with classic computer vision algorithms. Here is how to use the dual-engine setup:
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="guide-step">
        <h3 class="subsection-title">1. Upload an Image \u{1F5BC}\uFE0F</h3>
        <p class="body-text">
          Select any photo from your device. For the best results, pick an image where the subject has decent contrast against the background.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">2. Choose Your Engine \u2699\uFE0F</h3>
        <ul class="body-text" style="padding-left: 1.5rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
          <li><strong>AI Mode (Rust/WASM):</strong> Best for complex scenes like hair, fur, or subjects with messy backgrounds. It requires zero input\u2014just click process!</li>
          <li><strong>Algorithmic (OpenCV):</strong> Best for simple geometric objects or when the AI gets confused. It uses traditional math instead of a neural network.</li>
        </ul>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">3. Draw a Bounding Box (OpenCV Only) \u{1F5B1}\uFE0F</h3>
        <p class="body-text">
          If you selected the <strong>Algorithmic (OpenCV)</strong> engine, hover over the original image canvas. Click and drag to draw a green box that perfectly encapsulates your subject. This tells the algorithm exactly where to look.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">4. Extract & Download \u2728</h3>
        <p class="body-text">
          Click "Remove Background". Once processing is complete, you'll see your isolated subject over a transparent checkerboard. Click "Download Transparent PNG" to save the result with full alpha-channel transparency!
        </p>
      </div>
    </div>
  </div>

  <hr style="border: none; border-top: 1px solid var(--glass-border); margin: 0;">

  <div class="engineering-section">
    <h2 class="section-title">\u{1F52C} Engineering Behind the Scenes</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      This project showcases two vastly different eras of computer vision running entirely inside your browser without a single server API call.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="engineering-card">
        <h3 class="subsection-title">AI Engine: U^2-Net Neural Network \u{1F9E0}</h3>
        <p class="body-text">
          The "AI Mode" utilizes the <code>@imgly/background-removal</code> library. It loads a pre-trained U^2-Net Machine Learning model directly into the browser. By leveraging WebGL and WebAssembly, it pushes the heavy tensor calculations to your device's GPU, generating a highly accurate alpha matte for the foreground.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Algorithmic Engine: OpenCV GrabCut \u{1F9EE}</h3>
        <p class="body-text">
          The classic mode uses a WebAssembly port of OpenCV to run the <strong>GrabCut</strong> algorithm. It uses iterative Graph Cuts and Gaussian Mixture Models (GMMs). When you draw the bounding box, the algorithm assumes everything outside the box is the "background" GMM, and uses that data to statistically guess the foreground pixels inside the box.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Dynamic Memory & Scaling \u{1F4C9}</h3>
        <p class="body-text">
          Running C++ algorithms in a browser tab requires careful memory management. Before running GrabCut, the service checks the image dimensions. If it exceeds 800px, it mathematically calculates a scale factor and resizes the OpenCV Matrix (<code>cv.Mat</code>) using <code>cv.INTER_AREA</code> interpolation to prevent the browser tab from crashing while maintaining edge fidelity.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Pointer Manipulation \u{1F3A8}</h3>
        <p class="body-text">
          Once OpenCV generates a mask, the service iterates through the image array pointer by pointer (<code>ucharPtr</code>). It checks if OpenCV marked the pixel as "definite background" or "probable background" (values 0 or 2), and aggressively strips the Alpha channel (sets opacity to 0) before painting it back to an HTML5 Canvas.
        </p>
      </div>
    </div>
  </div>

</div>
`,kt=`
<div class="help-content-container flex-column" style="gap: 2rem;">
  
  <div class="user-guide-section">
    <h2 class="section-title">\u{1F4D0} How to Use the Vectorizer</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      Transform pixelated raster images (PNG/JPG) into infinitely scalable, crisp SVG vectors. Here is how to get the perfect trace:
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="guide-step">
        <h3 class="subsection-title">1. Upload & Set Complexity \u{1F5BC}\uFE0F</h3>
        <p class="body-text">
          Upload your image and use the <strong>Color Count</strong> slider to determine how detailed the trace should be. Fewer colors result in a cleaner, flatter, more stylized graphic, while more colors capture shading and gradients.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">2. Tune the Target Palette \u{1F3A8}</h3>
        <p class="body-text">
          Before processing, the tool extracts a color palette. You can manually adjust these colors by clicking the swatch, or click the <strong>Eyedropper Tool</strong> and click anywhere on the preview image to perfectly sample a specific pixel!
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">3. Vectorize! \u{1F680}</h3>
        <p class="body-text">
          Click "Vectorize Image". The engine will trace the shapes of each color layer and convert them into smooth mathematical curves.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">4. Post-Process & Merge Layers \u{1F504}</h3>
        <p class="body-text">
          In the Layer Editor, you can clean up the final result. <strong>Drag and drop</strong> one color swatch onto another to instantly merge those two paths! You can also click the trash icon to completely remove unwanted backgrounds or noise.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">5. Split or Combine \u2702\uFE0F</h3>
        <p class="body-text">
          Use the toggle on the preview card to view the final SVG as a single image, or separate it into <strong>Split Layers</strong>. The split view automatically adds registration marks, making it perfectly prepped for screen printing, vinyl plotting, or laser cutting!
        </p>
      </div>
    </div>
  </div>

  <hr style="border: none; border-top: 1px solid var(--glass-border); margin: 0;">

  <div class="engineering-section">
    <h2 class="section-title">\u2699\uFE0F Engineering Behind the Scenes</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      Converting pixels to math in the browser requires a complex pipeline of color theory and path tracing algorithms.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="engineering-card">
        <h3 class="subsection-title">Color Quantization \u{1F4C9}</h3>
        <p class="body-text">
          Before tracing can begin, the millions of colors in a standard photo must be strictly reduced. The service leverages <code>rgbquant</code> and <code>colorthief</code> to analyze the image, build an optimized color histogram, and map every single pixel to the nearest match in your defined palette.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">WASM Potrace Engine \u{1F9EE}</h3>
        <p class="body-text">
          The heavy lifting is powered by <code>esm-potrace-wasm</code>. Potrace is an industry-standard algorithm that takes a binary bitmap, traces the outline of the shapes to create polygons, and then optimizes those polygons by fitting smooth Bezier curves to them. Because it's compiled to WebAssembly, it runs at near-native speeds right in your browser.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Non-Blocking UI Generation \u{1F6A6}</h3>
        <p class="body-text">
          Vectorizing layer by layer is computationally expensive. To prevent the browser tab from completely freezing during processing, the service uses a <code>yieldToMain()</code> function wrapped around <code>requestIdleCallback</code>. This briefly pauses the loop, allowing Angular to update the progress bar and the browser to handle user interactions before resuming the math.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">AST DOM Manipulation \u{1F9E9}</h3>
        <p class="body-text">
          Features like "Split Layers" and "Drag-to-Merge" don't require recalculating the vectors. Instead, Angular parses the raw SVG string into an active Document Object Model (DOM). It dynamically merges <code>&lt;path&gt;</code> attributes, unwraps translation groups (<code>&lt;g&gt;</code>), recalculates bounding boxes (<code>viewBox</code>), and injects SVG registration marks natively on the fly!
        </p>
      </div>
    </div>
  </div>

</div>
`,St=`
<div class="help-content-container flex-column" style="gap: 2rem;">
  
  <div class="user-guide-section">
    <h2 class="section-title">\u{1F680} Enterprise-Grade JSON Visualization</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      Welcome to the WebGL JSON Viewer. Built for developers, data scientists, and engineers, this tool effortlessly transforms massive, deeply nested JSON payloads into an interactive, highly responsive visual map.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="guide-step">
        <h3 class="subsection-title">1. Ingest Massive Datasets \u{1F4C2}</h3>
        <p class="body-text">
          Drop in payloads up to <strong>100MB</strong> in size. Use the configuration panel to set dynamic limits on <strong>Max Depth</strong>, <strong>Array Items</strong>, and <strong>Total Nodes</strong> (rendering up to 100,000 nodes simultaneously) to perfectly balance detail and performance.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">2. Navigate with Zero Latency \u{1F5FA}\uFE0F</h3>
        <p class="body-text">
          Click and drag to pan across the infinite canvas, or use your mouse wheel to fluidly zoom in and out. Lost in the data? The interactive <strong>Minimap</strong> in the bottom corner provides a bird's-eye view\u2014simply click anywhere on the minimap to instantly teleport your viewport to that section of the tree.
        </p>
              </div>

      <div class="guide-step">
        <h3 class="subsection-title">3. Deep Data Inspection & Breadcrumbs \u{1F50D}</h3>
        <p class="body-text">
          Click on any node to reveal its exact location. The <strong>Breadcrumb Path</strong> instantly generates the dot-notation path required to programmatically access that data, alongside its exact value. Both are one click away from being copied to your clipboard.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">4. High-Speed Regex Search \u26A1</h3>
        <p class="body-text">
          Use the search bar to scan thousands of keys and values in milliseconds. The toolbar displays the total number of hits, and you can cycle through the results using the up/down arrows. The camera will automatically pan and zoom to focus on the active search result.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">5. Export for Documentation \u{1F4F8}</h3>
        <p class="body-text">
          Need to share a data architecture in a presentation or documentation? Click <strong>Export SVG</strong> to generate a high-fidelity, infinitely scalable vector graphic of your current tree state.
        </p>
      </div>
    </div>
  </div>

  <hr style="border: none; border-top: 1px solid var(--glass-border); margin: 0;">

  <div class="engineering-section">
    <h2 class="section-title">\u2699\uFE0F Architecture & Engineering</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      Standard DOM-based tree viewers collapse under the weight of a few thousand nodes. We engineered a custom rendering engine from the ground up to guarantee a locked 60 FPS, regardless of data complexity.
    </p>
    
    <div class="flex-column" style="gap: 1.25rem;">
      <div class="engineering-card">
        <h3 class="subsection-title">Dual-Canvas Rendering Engine \u{1F3A8}</h3>
        <p class="body-text">
          To achieve peak performance without sacrificing text readability, we utilize a stacked dual-canvas architecture. A <strong>WebGL2</strong> context handles the heavy lifting of rendering thousands of geometric nodes and connecting lines on the GPU. Directly above it, a transparent <strong>Canvas 2D API</strong> layer handles text rendering, ensuring crisp, device-pixel-ratio (DPR) optimized fonts that WebGL natively struggles with.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Rust & WebAssembly Core \u{1F980}</h3>
        <p class="body-text">
          The entire data parser, state manager, search engine, and viewport math is written in <strong>Rust</strong> and compiled to <strong>WebAssembly (WASM)</strong>. This provides near-native execution speed and strict memory safety. The <code>StreamingJsonParser</code> constructs a highly optimized <code>NodeTree</code> in memory, instantly calculating hierarchical layouts and bounding boxes before passing vertex data to WebGL.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Smart Relative Luminance Calculation \u{1F4A1}</h3>
        <p class="body-text">
          To support multiple themes (like Hacker Matrix and Sunset Pastel), node background colors change dynamically. Our Rust engine uses the standard relative luminance formula <code>(0.299 * R + 0.587 * G + 0.114 * B) / 255.0</code> to calculate the perceptual brightness of any background color in real-time. If the luma exceeds 0.55, the text automatically switches to dark grey; otherwise, it renders in stark white, ensuring perfect WCAG contrast compliance dynamically.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Web Worker Validation \u{1F6E1}\uFE0F</h3>
        <p class="body-text">
          Parsing a 100MB JSON string on the main thread would freeze the browser UI for seconds. We offload structural validation to a dedicated Web Worker. It checks the blob size, verifies the JSON integrity, and communicates via asynchronous message passing before the Rust engine ever touches the data.
        </p>
      </div>
    </div>
  </div>

</div>
`,Tt=`
<div class="help-content-container flex-column" style="gap: 2rem;">
  
  <div class="user-guide-section">
    <h2 class="section-title">\u{1F3AD} Advanced Meme Studio</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      A professional-grade workspace for image manipulation and rich typography compositing. Forget basic top/bottom text\u2014this tool gives you absolute typographic freedom.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="guide-step">
        <h3 class="subsection-title">1. Canvas Setup \u{1F5BC}\uFE0F</h3>
        <p class="body-text">
          Click <strong>Image</strong> to upload your base template. The smart canvas will automatically contain and clip the image to optimal dimensions. Use the zoom controls or click and drag the image to frame it perfectly within the viewport.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">2. Rich Text Compositing \u270D\uFE0F</h3>
        <p class="body-text">
          Use the <strong>Upper</strong> and <strong>Lower Text Editors</strong> to draft your content. Unlike standard generators, you can highlight individual words to change their color, font family, size, or background. Your changes are instantly rendered onto the live canvas.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">3. Global Styling \u{1F3A8}</h3>
        <p class="body-text">
          Use the <strong>Toggle BG</strong> button to switch the canvas backing between light and dark modes, automatically calculating the best contrast for unstyled text. Use the <strong>Align</strong> button to shift text alignment seamlessly.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">4. Zero-Latency Export \u{1F4BE}</h3>
        <p class="body-text">
          Once your masterpiece is ready, click the <strong>Download</strong> icon. The application will instantly compile the DOM layers into a high-resolution PNG image directly on your device, requiring zero server processing.
        </p>
      </div>
    </div>
  </div>

  <hr style="border: none; border-top: 1px solid var(--glass-border); margin: 0;">

  <div class="engineering-section">
    <h2 class="section-title">\u2699\uFE0F Architecture & Engineering</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      Building an interactive, scalable canvas with rich HTML text overlays requires bypassing standard DOM limitations and leveraging modern web graphics APIs.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="engineering-card">
        <h3 class="subsection-title">SVG Coordinate System \u{1F4D0}</h3>
        <p class="body-text">
          The core image engine is built on an infinitely scalable <code>&lt;svg&gt;</code> element utilizing an internal <code>viewBox</code>. This allows the app to perform complex pan and zoom matrix mathematics (tracking <strong>deltaX and deltaY<strong> via HostListeners) without losing resolution or triggering expensive browser layout reflows.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Safe HTML Injection Engine \u{1F6E1}\uFE0F</h3>
        <p class="body-text">
          To achieve multi-style typography within a single text block, the app utilizes Angular's <code>DomSanitizer</code>. This takes the raw output from the Rich Text Editor, safely bypasses security contexts, and binds it directly to the DOM using <code>[innerHTML]</code> while strictly preventing Cross-Site Scripting (XSS) vulnerabilities.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Client-Side Rasterization \u{1F4F8}</h3>
        <p class="body-text">
          Exporting HTML DOM layers (SVG images + div text blocks) as a single flat image file is incredibly complex. The app utilizes <code>html2canvas-pro</code> to traverse the DOM tree, clone the active CSS styles, and redraw the entire visual hierarchy pixel-by-pixel onto an isolated <code>&lt;canvas&gt;</code> element at 2x scale, before encoding it into a downloadable binary Blob.
        </p>
      </div>
    </div>
  </div>

</div>
`,jt=`
<div class="help-content-container flex-column" style="gap: 2rem;">
  
  <div class="user-guide-section">
    <h2 class="section-title">\u{1F4DD} Rich Text & Transliteration Lab</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      A robust, enterprise-grade text editing environment featuring intelligent clipboard sanitization and a custom-built Input Method Editor (IME) for seamless multi-language transliteration.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="guide-step">
        <h3 class="subsection-title">1. Rich Formatting \u{1F3A8}</h3>
        <p class="body-text">
          Utilize the toolbar to apply custom fonts, text colors, background highlights, and structural formatting (H1, H2, bulleted lists). The editor ensures clean HTML output without deprecated or bloated markup.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">2. Secure Copy & Paste \u{1F4CB}</h3>
        <p class="body-text">
          Try copying text from Microsoft Word, a website, or a Google Doc, and paste it into the editor. The engine will instantly strip out malicious scripts, hidden tracking pixels, and broken CSS, preserving only safe, clean formatting. You can even paste image files directly from your clipboard!
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">3. Multi-Language IME \u{1F310}</h3>
        <p class="body-text">
          Toggle the <strong>IME</strong> switch to activate the Input Method Editor. Select a target language (e.g., Hindi, Bengali) and an input logic rule set. As you type phonetically in English, the engine will intercept your keystrokes and transliterate the text into the native script in real-time.
        </p>
      </div>
    </div>
  </div>

  <hr style="border: none; border-top: 1px solid var(--glass-border); margin: 0;">

  <div class="engineering-section">
    <h2 class="section-title">\u2699\uFE0F Architecture & Engineering</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      Building a reliable <code>contenteditable</code> wrapper is notoriously difficult. This lab implements sophisticated AST (Abstract Syntax Tree) manipulation and DOM traversal algorithms to maintain absolute control over the data.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="engineering-card">
        <h3 class="subsection-title">Clipboard AST Sanitization \u{1F9F9}</h3>
        <p class="body-text">
          Pasting rich text often introduces toxic DOM structures. Our custom <code>ClipboardEvent</code> interceptor utilizes a <code>DOMParser</code> to construct a virtual document. It recursively walks the node tree, aggressively filtering out unauthorized tags (retaining inner text) and stripping attributes. It even detects layout-breaking <code>&lt;div&gt;</code> elements and morphs them into semantically correct <code>&lt;p&gt;</code> tags.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Base64 Image Interception \u{1F5BC}\uFE0F</h3>
        <p class="body-text">
          To support offline workflows, the editor scans the clipboard for <code>image/*</code> payloads. It automatically captures the binary file, uses a <code>FileReader</code> to convert it into a Base64 Data URL, and injects it safely into the DOM. External tracking image URLs are actively blocked during paste events.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Synthetic Keydown Transliteration \u2328\uFE0F</h3>
        <p class="body-text">
          The IME engine avoids browser lag by performing algorithmic string replacement. When typing, the <code>ImeInputDirective</code> intercepts input events and generates synthetic keyboard events. It applies advanced Regex logic against dynamic JSON rule dictionaries fetched via RxJS <code>HttpClient</code> to calculate precise transliterations based on current context constraints.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">TreeWalker Cursor Tracking \u{1F4CD}</h3>
        <p class="body-text">
          When the IME replaces "mera" with "\u092E\u0947\u0930\u093E", the browser naturally loses track of the user's cursor if the text is wrapped in multi-colored <code>&lt;span&gt;</code> tags. Our engine utilizes a native <code>document.createTreeWalker</code> with a <code>NodeFilter.SHOW_TEXT</code> configuration to manually calculate raw character offsets, perform the replacement, and programmatically reposition the <code>Selection</code> range to exactly where it belongs, achieving flawless UX.
        </p>
      </div>
    </div>
  </div>

</div>
`,It=`
<div class="help-content-container flex-column" style="gap: 2rem;">
  
  <div class="user-guide-section">
    <h2 class="section-title">\u2702\uFE0F SVG Sticker Studio</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      A professional prepress utility that transforms flat SVG graphics into production-ready sticker files. It automatically calculates structural offsets, bleeds, and die-cut lines required by commercial plotters (like Cricut, Roland, or Graphtec).
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="guide-step">
        <h3 class="subsection-title">1. Upload Vector Art \u{1F5BC}\uFE0F</h3>
        <p class="body-text">
          Upload any standard SVG file. The engine will parse the internal geometry, regardless of whether it uses paths, circles, rectangles, or polygons, and normalize it for processing.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">2. Configure the Offset \u{1F39B}\uFE0F</h3>
        <ul class="body-text" style="padding-left: 1.5rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
          <li><strong>Border Thickness:</strong> Define exactly how much white space (or colored border) should encapsulate your design.</li>
          <li><strong>Corner Style:</strong> Choose how the algorithmic offset handles sharp edges. <em>Round</em> is standard for stickers, <em>Miter</em> creates sharp points, and <em>Square</em> clips the angles mathematically.</li>
        </ul>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">3. Professional Export Routing \u{1F5A8}\uFE0F</h3>
        <p class="body-text">
          Click the download menu to select from four industry-standard export profiles:
        </p>
        <ul class="body-text" style="padding-left: 1.5rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
          <li><strong>Visual Sticker:</strong> A standard WYSIWYG vector graphic showing the art and its border.</li>
          <li><strong>Professional Cutline:</strong> Generates the standard 1px Magenta (<code>#FF00FF</code>) <code>CutContour</code> stroke universally recognized by RIP software.</li>
          <li><strong>Print & Cut:</strong> Generates a full production stack with Bleed boundaries, a dashed Green (<code>#00FF00</code>) Safe Line, and the final Die Line.</li>
          <li><strong>Silhouette Mask:</strong> A solid black alpha-mask of the overall geometry.</li>
        </ul>
      </div>
    </div>
  </div>

  <hr style="border: none; border-top: 1px solid var(--glass-border); margin: 0;">

  <div class="engineering-section">
    <h2 class="section-title">\u2699\uFE0F Architecture & Engineering</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      Calculating a unified outer boundary (an "offset" or "buffer") around intersecting vector shapes is a notoriously difficult mathematical problem. Here is how this tool solves it entirely client-side.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="engineering-card">
        <h3 class="subsection-title">Mathematical Path Flattening \u{1F4D0}</h3>
        <p class="body-text">
          SVGs contain complex bezier curves and primitive shapes (rects, circles). The parsing engine first normalizes all elements into path data (<code>d</code> attributes). It then traverses the path using the native <code>getPointAtLength()</code> API, sampling points at precise intervals to convert pure math into measurable polygons.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Sub-Path Heuristic Detection \u{1F50D}</h3>
        <p class="body-text">
          A single SVG <code>&lt;path&gt;</code> often contains multiple disconnected shapes or "holes." The parsing engine employs a distance-thresholding algorithm: by measuring the straight-line distance between sequential sampled points, it detects when the distance physically exceeds the sampling tolerance. This mathematically guarantees a "MoveTo" command occurred, allowing the engine to split the path into distinct geometric arrays automatically.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">WebAssembly Geometry Engine \u{1F980}</h3>
        <p class="body-text">
          Once the polygons are extracted, they are passed to a local WASM-compiled Boolean Geometry engine. This engine performs Clipper-style polygon union operations to merge all intersecting shapes into a single unified mass, and then applies the configured offset expansion.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">CSS-Driven Prepress Compositing \u{1F3A8}</h3>
        <p class="body-text">
          To generate the "Print & Cut" file, the application constructs a multi-layered DOM string. To simulate commercial "Bleed" (printing color slightly past the cut line so no white edges appear if the blade misaligns), it utilizes a massive <code>stroke-width: 12</code> applied with <code>stroke-linejoin="round"</code> on the background layer, organically pushing the ink bounds outward without requiring additional polygon calculations.
        </p>
      </div>
    </div>
  </div>

</div>
`,At=`
<div class="help-content-container flex-column" style="gap: 2rem;">
  
  <div class="user-guide-section">
    <h2 class="section-title">\u{1F9FE} Professional Rent Receipt Generator</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      An enterprise-grade financial utility designed to automate the creation of compliant rent receipts. Perfect for generating verifiable documentation for HRA (House Rent Allowance) tax exemptions and formal accounting.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="guide-step">
        <h3 class="subsection-title">1. Input Lease Parameters \u{1F4DD}</h3>
        <p class="body-text">
          Fill in the comprehensive configuration form with Tenant and Landlord details. The form strictly validates required fields to ensure your generated receipts meet standard accounting compliance.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">2. Tax Compliance & PAN \u{1F3DB}\uFE0F</h3>
        <p class="body-text">
          For rent amounts exceeding specific tax thresholds, the tool provides a dedicated field for the <strong>Landlord's PAN</strong>. If provided, this is automatically injected into the footer of every generated receipt, satisfying governmental tax exemption requirements.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">3. Live Document Preview \u{1F441}\uFE0F</h3>
        <p class="body-text">
          As you type, the application dynamically builds a physical "Paper" preview below the configuration card. This WYSIWYG (What You See Is What You Get) interface lets you verify the exact layout, including the \u20B91 Revenue Stamp placeholder and signature lines, before printing.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">4. One-Click Batch Export \u{1F5A8}\uFE0F</h3>
        <p class="body-text">
          Generating receipts for an entire financial year? The engine can batch-process multiple months instantly. Click the print button to compile the receipts into an isolated, print-optimized document ready for physical printing or PDF saving.
        </p>
      </div>
    </div>
  </div>

  <hr style="border: none; border-top: 1px solid var(--glass-border); margin: 0;">

  <div class="engineering-section">
    <h2 class="section-title">\u2699\uFE0F Architecture & Engineering</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      Behind the clean interface is a robust reactive data pipeline and specialized print-media rendering logic to bridge the gap between web UI and physical A4 paper.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="engineering-card">
        <h3 class="subsection-title">Algorithmic Currency Localization \u{1F1EE}\u{1F1F3}</h3>
        <p class="body-text">
          Standard JavaScript localization libraries often fail to properly format numbers using the South Asian numbering system. This application features a custom algorithmic parser that recursively breaks down raw integer inputs and transliterates them into accurate Indian currency syntax (e.g., Crores, Lakhs, Thousands) in real-time.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Reactive Form Architecture \u26A1</h3>
        <p class="body-text">
          The core configuration utilizes Angular's <code>ReactiveFormsModule</code> interconnected with modern Signals. This creates a high-performance, unidirectional data flow. Any change to the <code>FormGroup</code> instantly recalculates the textual layout and currency conversions without requiring manual DOM updates or dirty-checking.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Print-Media DOM Isolation \u{1F5A8}\uFE0F</h3>
        <p class="body-text">
          Printing directly from a complex web app usually results in broken layouts containing UI buttons, scrollbars, and navigation headers. To solve this, the export pipeline extracts the pure receipt HTML and injects it into an isolated <code>Blob</code> object of type <code>text/html</code>. This Blob is served to a new, sterile browser window containing only the exact CSS required for A4 paper dimensions, guaranteeing a flawless PDF generation.
        </p>
      </div>
    </div>
  </div>

</div>
`,zt=`
<div class="help-content-container flex-column" style="gap: 2rem;">
  
  <div class="user-guide-section">
    <h2 class="section-title">\u{1F4C8} Precision PPF Calculator</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      An enterprise-grade financial projection tool designed to accurately simulate long-term wealth generation through the Indian Public Provident Fund (PPF). Experience the power of exponential compounding with strict algorithmic adherence to governmental interest rules.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="guide-step">
        <h3 class="subsection-title">1. Structure Your Investment \u{1F4B0}</h3>
        <p class="body-text">
          Input your planned <strong>Annual Investment</strong> (up to the maximum tax-exempt limit of \u20B91.5L) and dial in the current expected interest rate. Adjust the duration slider to simulate the mandatory 15-year lock-in period, or extend it in 5-year blocks up to 50 years to visualize generational wealth.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">2. Optimize Your Deposit Strategy \u{1F4C5}</h3>
        <p class="body-text">
          Choose between <strong>Monthly</strong> or <strong>Yearly</strong> deposit frequencies. The calculator demonstrates exactly how front-loading your investments early in the financial year, or ensuring monthly deposits occur before the 5th, significantly boosts your final maturity amount over decades.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">3. Analyze the Amortization Schedule \u{1F4CA}</h3>
        <p class="body-text">
          Scroll down to the dynamic data table for a granular, year-by-year breakdown of your financial journey. Track your Opening Balance, Yearly Deposits, strictly calculated Yearly Interest, and the Closing Balance across the entire lifecycle of the fund.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">4. Visualize Exponential Growth \u{1F680}</h3>
        <p class="body-text">
          The integrated charts provide a stark visual representation of compounding. Watch as the "Interest Earned" component inevitably overtakes your "Total Invested" principal, visually proving the value of long-term holding.
        </p>
      </div>
    </div>
  </div>

  <hr style="border: none; border-top: 1px solid var(--glass-border); margin: 0;">

  <div class="engineering-section">
    <h2 class="section-title">\u2699\uFE0F Architecture & Engineering</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      Standard compounding calculators fail to capture the nuanced statutory rules of actual government schemes. This module was engineered to provide uncompromising mathematical accuracy alongside a zero-latency UX.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="engineering-card">
        <h3 class="subsection-title">Algorithmic Statutory Compliance \u{1F3DB}\uFE0F</h3>
        <p class="body-text">
          The financial service engine strictly implements the Indian government's PPF interest calculation mandate: <em>Interest is calculated on the lowest balance between the close of the 5th day and the end of the month</em>. The algorithm intelligently branches logic based on deposit dates, computing monthly internal states but only crediting the compounded interest at the close of the financial year.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Reactive Signal Pipeline \u26A1</h3>
        <p class="body-text">
          Calculating 50 years of complex monthly interest accruals instantly requires a highly optimized data flow. By binding form inputs directly to Angular Signals, the application circumvents standard change detection. Dragging the duration slider instantly recalculates the entire schedule array and seamlessly pipes the updated vectors to the charting engine at 60 FPS.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Data Visualization Adapter \u{1F3A8}</h3>
        <p class="body-text">
          To maintain a lightweight footprint, the application utilizes an adapter pattern to map the dense <code>PPFYearRow</code> data structures into standardized metrics compatible with the shared <code>SvgChartService</code>. This allows the bespoke PPF data to be rendered beautifully on the existing graphical architecture without bloating the codebase with redundant chart logic.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Responsive Glass-Morphism Data Tables \u{1F4F1}</h3>
        <p class="body-text">
          Displaying wide financial ledgers on mobile devices is notoriously difficult. The UI employs a custom, horizontally scrollable <code>glass-table</code> component. It utilizes sticky headers and selective column hiding via media queries to guarantee that critical financial figures remain legible and beautiful, regardless of screen real estate.
        </p>
      </div>
    </div>
  </div>

</div>
`,Et=`
<div class="help-content-container flex-column" style="gap: 2rem;">
  
  <div class="user-guide-section">
    <h2 class="section-title">\u2728 Advanced Auto-Vectorizer</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      A professional-grade image tracing studio. Convert complex raster images (like photos or detailed logos) into infinitely scalable vector graphics using advanced curve-fitting algorithms.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="guide-step">
        <h3 class="subsection-title">1. One-Click Presets \u26A1</h3>
        <p class="body-text">
          Start by uploading an image. Use the Quick Presets (<strong>Photo/Portrait</strong>, <strong>Logo/Icon</strong>, <strong>Line Art/Sketch</strong>) to automatically dial in the perfect tracing parameters for your specific image type. 
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">2. Interactive Magic Wand \u{1FA84}</h3>
        <p class="body-text">
          Need to remove a background or isolate a specific shape? Use the built-in <strong>Magic Wand</strong> tool. Click anywhere on the image to intelligently select connected regions based on your defined Color Tolerance, powered by background Superpixel generation.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">3. Advanced Engine Tuning \u{1F39B}\uFE0F</h3>
        <p class="body-text">
          Take manual control over the math. Adjust <strong>Speckle Filtering</strong> to remove noise, tweak <strong>Corner & Length Thresholds</strong> for sharper or softer shapes, and choose between smooth <strong>Splines</strong> or rigid <strong>Polygons</strong>. 
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">4. Professional CAD/Print Export \u{1F4BE}</h3>
        <p class="body-text">
          Once the math settles, download your vector. Export as a standard <strong>SVG</strong> for web and print, or use the <strong>DXF</strong> and <strong>EPS</strong> export options to directly feed AutoCAD, laser cutters, and CNC machines.
        </p>
      </div>
    </div>
  </div>

  <hr style="border: none; border-top: 1px solid var(--glass-border); margin: 0;">

  <div class="engineering-section">
    <h2 class="section-title">\u2699\uFE0F Architecture & Engineering</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      Tracing thousands of bezier curves across a high-resolution image requires immense computational power. We engineered a multi-threaded pipeline to keep the browser responsive.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="engineering-card">
        <h3 class="subsection-title">Web Worker Multithreading \u{1F9F5}</h3>
        <p class="body-text">
          Image vectorization requires four intense passes: Color Quantization, Edge Detection, Path Generation, and Spline Optimization. The <code>VectorizerService</code> delegates this entire lifecycle to an isolated <strong>Web Worker</strong> via asynchronous message passing, ensuring your UI never freezes during complex calculations.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Hierarchical & Cutout Pathing \u{1F4D0}</h3>
        <p class="body-text">
          The engine supports two distinct polygon rendering methods. <strong>Stacked (Hierarchical)</strong> places smaller shapes on top of larger background shapes, ideal for digital art. <strong>Cutout</strong> mode literally punches mathematical holes out of overlapping shapes using boolean logic, creating perfect single-layer paths required for vinyl plotters and CNC routing.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Superpixel Segmentation \u{1F9E9}</h3>
        <p class="body-text">
          To power the Magic Wand, the engine utilizes a <strong>Superpixel</strong> generation algorithm. Instead of analyzing millions of individual pixels, it groups perceptually similar adjacent pixels into larger geometric clusters. This allows the wand's flood-fill logic to traverse the image exponentially faster.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Synchronized Pan & Zoom Viewports \u{1F50D}</h3>
        <p class="body-text">
          To provide an exact 1:1 comparison between the original raster and the generated vector, the component utilizes Angular <code>@HostListener</code> bindings to track matrix transformations (Scale, TranslateX/Y). Panning or zooming on one canvas instantly applies the identical transformation matrix to the other, creating a flawless diffing experience.
        </p>
      </div>
    </div>
  </div>

</div>
`,Dt=`
<div class="help-content-container flex-column" style="gap: 2rem;">
  
  <div class="user-guide-section">
    <h2 class="section-title">\u{1F4D0} Aspect Ratio & Scaling Lab</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      A technical laboratory for understanding how digital images stretch, fit, and fill responsive containers. Compare native SVG scaling behaviors perfectly against our custom mathematical Canvas engine.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="guide-step">
        <h3 class="subsection-title">1. Provide a Test Image \u{1F5BC}\uFE0F</h3>
        <p class="body-text">
          Upload any image to use as your test subject. The tool will automatically project it into three distinct container shapes: Landscape (280\xD7200), Portrait (200\xD7280), and Square (200\xD7200).
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">2. Select the Scale Mode \u{1F39B}\uFE0F</h3>
        <p class="body-text">
          Use the <strong>Scale Mode</strong> dropdown to fundamentally change how the image reacts to its container's boundaries:
        </p>
        <ul class="body-text" style="padding-left: 1.5rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
          <li><strong>Meet (Letterbox):</strong> Scales the image as large as possible without cropping. Empty space is left on the sides or top/bottom.</li>
          <li><strong>Slice (Pan & Scan):</strong> Scales the image to completely fill the container. Excess image data outside the bounds is cropped away.</li>
          <li><strong>None (Stretch):</strong> Ignores the original aspect ratio completely and distorts the image to fit the container perfectly.</li>
        </ul>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">3. Adjust the Focal Alignment \u{1F3AF}</h3>
        <p class="body-text">
          When using <em>Meet</em> or <em>Slice</em>, the image might have extra space or be cropped. Use the <strong>X / Y Alignment</strong> dropdowns (Min, Mid, Max) to dictate which part of the image should anchor to the container. Want to crop towards the top-right corner? Set X to Max and Y to Min!
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">4. Compare the Renders \u{1F50D}</h3>
        <p class="body-text">
          Scroll down to see the results. The top row utilizes standard <code>&lt;canvas&gt;</code> rendering, while the bottom row uses native <code>&lt;svg&gt;</code> rendering. Our custom mathematical engine guarantees both rows will look absolutely identical, proving our scaling math is pixel-perfect!
        </p>
      </div>
    </div>
  </div>

  <hr style="border: none; border-top: 1px solid var(--glass-border); margin: 0;">

  <div class="engineering-section">
    <h2 class="section-title">\u2699\uFE0F Architecture & Engineering</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      This lab highlights a notorious frontend challenge: while SVGs handle complex scaling natively, HTML5 Canvas requires you to calculate all bounding boxes and crop ratios manually.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="engineering-card">
        <h3 class="subsection-title">The "preserveAspectRatio" Discrepancy \u2696\uFE0F</h3>
        <p class="body-text">
          In an SVG, achieving perfect letterboxing or cropping is as simple as adding an attribute like <code>preserveAspectRatio="xMidYMax slice"</code> to an <code>&lt;image&gt;</code> tag. However, the Canvas 2D API's <code>drawImage()</code> method has absolutely no built-in equivalent, making responsive canvas graphics incredibly tedious to code.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Algorithmic Canvas Polyfill \u{1F9EE}</h3>
        <p class="body-text">
          To solve this, we engineered the <code>AspectRatioService</code>. It acts as a mathematical polyfill for Canvas. It parses strings like <code>"xMaxYMid slice"</code> and executes complex dimensional arithmetic to calculate the exact Source X/Y (<code>sx, sy</code>), Source Width/Height (<code>swidth, sheight</code>), and Destination coordinates required to mimic SVG behavior on the Canvas API.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Handling the "Meet" Calculation \u{1F4D0}</h3>
        <p class="body-text">
          When in "Meet" mode, the algorithm calculates the scaling ratio for both width and height independently. It selects the <em>minimum</em> ratio of the two, applies it to the image, and then calculates the remaining delta pixels in the container to properly anchor the image based on your Min/Mid/Max alignment choices.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Reactive Render Pipeline \u26A1</h3>
        <p class="body-text">
          The UI state is driven entirely by Angular Signals (<code>xAlignment</code>, <code>yAlignment</code>, <code>scaleMode</code>). Any change to the dropdowns instantly generates a new composite string (e.g., <code>"xMidYMid meet"</code>), triggering a simultaneous DOM update for the SVG attributes and a complete recalculation and re-draw sequence for the Canvas contexts at 60FPS.
        </p>
      </div>
    </div>
  </div>

</div>
`,Rt=`
<div class="help-content-container flex-column" style="gap: 2rem;">
  
  <div class="user-guide-section">
    <h2 class="section-title">\u{1F3E6} Advanced Loan & Mortgage Projector</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      A professional financial forecasting engine. Unlike basic calculators, this tool accurately simulates real-world banking scenarios including variable interest rates, strategic prepayments, and exact daily interest calculations.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="guide-step">
        <h3 class="subsection-title">1. Bidirectional Forecasting \u{1F504}</h3>
        <p class="body-text">
          Use the calculation mode toggle to choose your strategy:
        </p>
        <ul class="body-text" style="padding-left: 1.5rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
          <li><strong>Fix Duration:</strong> Enter how many months you want the loan to last, and the engine will calculate your required monthly EMI.</li>
          <li><strong>Fix EMI:</strong> Enter exactly how much you can afford to pay each month, and the engine will calculate exactly how many months it will take to become debt-free.</li>
        </ul>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">2. Variable Interest Rates \u{1F4C8}</h3>
        <p class="body-text">
          Real mortgages fluctuate. Add <strong>Rate Revisions</strong> to simulate historical changes or project future rate hikes. The amortization engine will automatically recalculate the interest component from that exact date forward.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">3. Strategic Prepayments \u{1F4B0}</h3>
        <p class="body-text">
          Got an annual bonus? Add it as a <strong>Prepayment</strong>. The schedule will instantly update to show you exactly how many thousands of rupees (and months of debt) that single lump-sum payment shaved off the backend of your loan.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">4. Import, Export & Print \u{1F5C4}\uFE0F</h3>
        <p class="body-text">
          Building a complex 20-year mortgage simulation takes time. Click <strong>Download JSON</strong> to save your exact configuration (including all prepayments and rate changes) to your device. Next time you visit, just upload that JSON file to instantly resume where you left off.
        </p>
      </div>
    </div>
  </div>

  <hr style="border: none; border-top: 1px solid var(--glass-border); margin: 0;">

  <div class="engineering-section">
    <h2 class="section-title">\u2699\uFE0F Architecture & Engineering</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      This utility is built on a high-performance reactive pipeline, utilizing strict financial algorithms to guarantee pixel-perfect parity with real bank ledgers.
    </p>
    

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="engineering-card">
        <h3 class="subsection-title">Daily Reducing Balance Algorithm \u{1F9EE}</h3>
        <p class="body-text">
          Most online calculators use simplistic monthly compounding. This service utilizes an exact <code>daysInPeriod</code> calculation. It computes the exact number of days between the previous payment and the current payment, accounting for leap years and 31-day months, to calculate the precise daily interest accrued <code>(balance * rate / 365 * days)</code>.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Client-Side State Hydration \u{1F4A7}</h3>
        <p class="body-text">
          The JSON import functionality circumvents server-side databases entirely. When a user drops a saved configuration file into the <code>FileUploadComponent</code>, the browser's native <code>FileReader</code> API parses the text, and the Angular component instantly hydrates the complex nested Signals (mapping stringified dates back into native JavaScript <code>Date</code> objects).
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Bidirectional Signal Binding \u26A1</h3>
        <p class="body-text">
          The <code>calcMode</code> Signal acts as a master switch for the UI. By leveraging Angular's unidirectional data flow, disabling the "Duration" input dynamically recalculates the mathematical resolution strategy on every keystroke, ensuring the amortization array never falls out of sync with the user's inputs.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Print-Media CSS Segregation \u{1F5A8}\uFE0F</h3>
        <p class="body-text">
          To generate professional PDF reports, the DOM utilizes the <code>.no-print</code> CSS class architecture. When the user triggers the Print View, the UI cleanly strips away the configuration cards, upload zones, and interactive buttons, leaving only the pristine, A4-optimized Data Table and Summary Graphics for the print spooler.
        </p>
      </div>
    </div>
  </div>

</div>
`,Lt=`
<div class="help-content-container flex-column" style="gap: 2rem;">
  
  <div class="user-guide-section">
    <h2 class="section-title">\u{1F5C2}\uFE0F Interactive JSON Inspector</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      A powerful, developer-friendly utility for parsing, formatting, and deeply inspecting JSON payloads. It transforms raw data into an easily navigable, interactive tree structure.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="guide-step">
        <h3 class="subsection-title">1. Ingest Data \u{1F4E5}</h3>
        <p class="body-text">
          Start by pasting your raw JSON directly into the editor, or use the <strong>Upload</strong> button to load a <code>.json</code> file from your device. Use the Format and Minify buttons in the toolbar to clean up messy payloads before viewing.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">2. Navigate the Tree \u{1F333}</h3>
        <p class="body-text">
          Click the <strong>View Tree</strong> icon to generate the interactive hierarchy. Use the <strong>Expand All</strong> and <strong>Collapse All</strong> controls to quickly manage large datasets, and click the chevron next to any object or array to dig deeper into its contents.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">3. Real-Time Search Filtering \u{1F50D}</h3>
        <p class="body-text">
          Looking for a specific key or value? Type it into the search bar. The tree will instantly filter itself, hiding irrelevant branches while maintaining the exact parent-child hierarchy required to locate your search match.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">4. Deep Node Inspection \u{1F575}\uFE0F\u200D\u2642\uFE0F</h3>
        <p class="body-text">
          Click on any node in the tree to open the <strong>Inspector Panel</strong> on the right. This pane provides a granular breakdown of the node's children, its data type, and automatically generates a copyable <strong>Breadcrumb Path</strong> showing exactly how to programmatically target that specific node.
        </p>
      </div>
    </div>
  </div>

  <hr style="border: none; border-top: 1px solid var(--glass-border); margin: 0;">

  <div class="engineering-section">
    <h2 class="section-title">\u2699\uFE0F Architecture & Engineering</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      Parsing strings into DOM elements is tricky. This tool leverages Angular Material's CDK (Component Dev Kit) alongside custom recursive algorithms to ensure stable UI rendering.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="engineering-card">
        <h3 class="subsection-title">AST-Style Node Mapping \u{1F5FA}\uFE0F</h3>
        <p class="body-text">
          Instead of rendering raw objects, the service utilizes a recursive parsing function to traverse the JSON and map it into an array of typed <code>JsonNode</code> objects. This enriches the raw data with critical UI metadata (like explicit data types, depth counters, and parent references) required for complex interactions.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Angular Material CDK Tree \u{1F332}</h3>
        <p class="body-text">
          The visual hierarchy is powered by <code>MatTreeNestedDataSource</code> and <code>NestedTreeControl</code>. By binding our custom node structure to the Material CDK, we gain highly accessible, keyboard-navigable, and performant expanding/collapsing logic without writing fragile DOM manipulation code.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Recursive Filtering Algorithm \u{1F9EE}</h3>
        <p class="body-text">
          The search function doesn't just use CSS to hide unmatched elements. It utilizes a deep recursive algorithm (<code>buildFilteredTree</code>) to construct a brand new virtual tree. If a deeply nested child matches the search query, the algorithm mathematically guarantees that all of its parent nodes are preserved in the new tree, preventing orphaned results.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Backtracking Breadcrumb Generation \u{1F4CD}</h3>
        <p class="body-text">
          Because the initial parsing step injects a <code>parent</code> pointer into every <code>JsonNode</code>, the Breadcrumb Generator operates with O(D) time complexity (where D is depth). When a leaf node is clicked, it simply walks backward through the parent references, unshifting keys into an array to construct the perfect dot-notation path instantly.
        </p>
      </div>
    </div>
  </div>

</div>
`,Gt=`
<div class="help-content-container flex-column" style="gap: 2rem;">
  
  <div class="user-guide-section">
    <h2 class="section-title">\u26A1 High-Performance Virtual JSON Viewer</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      An enterprise-grade data inspection tool engineered to handle massive JSON payloads that would instantly crash standard DOM-based viewers. Experience zero-latency scrolling through tens of thousands of nodes.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="guide-step">
        <h3 class="subsection-title">1. Ingest Massive Data \u{1F4E5}</h3>
        <p class="body-text">
          Upload multi-megabyte <code>.json</code> files directly from your device, or paste raw payloads into the editor. The UI remains completely responsive while background workers process the data.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">2. Infinite Virtual Scrolling \u{1F3A2}</h3>
        <p class="body-text">
          Navigate through thousands of nested objects and arrays with a locked 60 FPS. Expand or collapse massive arrays instantly without any layout thrashing or browser freezing.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">3. Multi-Threaded Search \u{1F50D}</h3>
        <p class="body-text">
          Use the search bar to locate specific keys or values across massive datasets. The search query is executed on a dedicated background thread, ensuring the UI never stutters, even when scanning millions of characters.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">4. Deep Inspection & Path Generation \u{1F4CD}</h3>
        <p class="body-text">
          Click on any node to open the Details Pane. The application automatically traces the node's ancestry to generate a programmatic, copy-pasteable JSON path (e.g., <code>root.users[4].metadata.lastLogin</code>), intelligently mixing dot and bracket notation.
        </p>
      </div>
    </div>
  </div>

  <hr style="border: none; border-top: 1px solid var(--glass-border); margin: 0;">

  <div class="engineering-section">
    <h2 class="section-title">\u2699\uFE0F Architecture & Engineering</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      Rendering a 50,000-node tree typically creates 150,000+ HTML elements, overwhelming the browser's paint engine. This project abandons standard hierarchical rendering for a flat, multi-threaded virtualized architecture.
    </p>
    

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="engineering-card">
        <h3 class="subsection-title">Background Parser Thread \u{1F9F5}</h3>
        <p class="body-text">
          Parsing strings into a deep AST (Abstract Syntax Tree) is an O(N) operation that blocks the main thread. We offload this to <code>json-parser.worker.ts</code>. This Web Worker recursively parses the JSON and flattens it into a 1D array of <code>FlatJsonNode</code> objects. It also pre-calculates structural metadata (like <code>ancestorIsLast</code> arrays) to draw the tree's vertical connecting lines.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">CDK Virtual Viewport \u{1F3CE}\uFE0F</h3>
        <p class="body-text">
          Instead of rendering the entire flattened array, the UI leverages Angular's <code>CdkVirtualScrollViewport</code>. If your data has 50,000 nodes, but only 30 fit on your screen, the DOM only ever contains 30 elements. As you scroll, Angular instantly recycles and repaints those same 30 elements with the new data, keeping memory consumption microscopically low.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Zero-Serialization Search Engine \u{1F680}</h3>
        <p class="body-text">
          Passing a 50,000-node array back and forth between the Main Thread and a Web Worker for every keystroke during a search would cause massive serialization lag. Instead, <code>json-search.worker.ts</code> caches the master array in its own memory *once* upon initialization. When you type, it only sends back an array of matched integers (indices), completely eliminating IPC (Inter-Process Communication) bottlenecks.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">O(D) Path Backtracking \u{1F9EE}</h3>
        <p class="body-text">
          Because the tree is rendered as a flat array instead of nested objects, generating the breadcrumb path requires clever mapping. Every node stores a <code>parentId</code>. When clicked, the engine performs a lightning-fast O(D) backtrack (where D is depth), traversing upward through the flat array to construct the precise syntax path instantly.
        </p>
      </div>
    </div>
  </div>

</div>
`,z={"embroidery-digitizer":xt,"background-remover":wt,"png-to-svg-potrace":kt,"png-to-svg":Et,"webgl-json-viewer":St,"meme-generator":Tt,"rich-text-lab":jt,"svg-sticker-effect":It,"rent-receipt":At,"ppf-calculator":zt,"aspect-ratio-demo":Dt,"loan-projector":Rt,"json-viewer":Lt,"json-viewer-highperf":Gt};var w=class o{transform(n,t){if(!t||!n)return n;let e=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),r=new RegExp(`(${e})`,"gi");return n.replace(r,'<mark class="search-highlight">$1</mark>')}static \u0275fac=function(t){return new(t||o)};static \u0275pipe=V({name:"highlight",type:o,pure:!0})};var Vt=["searchInput"],Ut=(o,n)=>n.id;function Bt(o,n){if(o&1){let t=C();a(0,"button",20),h("click",function(){u(t);let r=l();return b(r.backToDashboard())}),a(1,"mat-icon"),s(2,"arrow_back"),i()()}}function Nt(o,n){if(o&1){let t=C();a(0,"button",21),h("click",function(){u(t);let r=l();return b(r.openHelpGuide())}),a(1,"mat-icon"),s(2,"help_outline"),i()()}}function Wt(o,n){if(o&1){let t=C();a(0,"input",25,1),h("ngModelChange",function(r){u(t);let d=l(2);return b(d.searchQuery.set(r))})("keyup.enter",function(){u(t);let r=I(1);return b(r.blur())})("blur",function(){u(t);let r=l(2);return b(r.onSearchBlur())}),i()}if(o&2){let t=l(2);p("ngModel",t.searchQuery())}}function Ht(o,n){if(o&1){let t=C();a(0,"div",22),g(1,Wt,2,1,"input",23),a(2,"button",24),h("mousedown",function(r){return r.preventDefault()})("click",function(){u(t);let r=l();return b(r.toggleSearch())}),a(3,"mat-icon"),s(4),i()()()}if(o&2){let t=l();_("active",t.isSearchActive()||t.searchQuery().length>0),c(),m(t.isSearchActive()||t.searchQuery().length>0?1:-1),c(),S("aria-label",t.isSearchActive()||t.searchQuery()?"Clear Search":"Open Search"),c(2),O(t.isSearchActive()||t.searchQuery()?"close":"search")}}function qt(o,n){if(o&1&&(f(0,"mat-chip",29),y(1,"highlight")),o&2){let t=n.$implicit,e=l(4);p("innerHTML",v(1,1,t,e.searchQuery()),P)}}function Yt(o,n){if(o&1){let t=C();a(0,"mat-card",28)(1,"mat-card-header")(2,"div"),f(3,"mat-card-title",29),y(4,"highlight"),i(),a(5,"button",30),h("click",function(r){u(t);let d=l().$implicit;return l(2).navigateToProject(d.id),b(r.stopPropagation())}),a(6,"mat-icon"),s(7,"launch"),i()()(),a(8,"mat-card-content"),f(9,"p",31),y(10,"highlight"),a(11,"div",32)(12,"mat-chip-set"),T(13,qt,2,4,"mat-chip",29,U),i()()()()}if(o&2){let t=l().$implicit,e=l(2);S("aria-label","Open "+t.name),c(3),p("innerHTML",v(4,3,t.name,e.searchQuery()),P),c(6),p("innerHTML",v(10,6,t.description,e.searchQuery()),P),c(4),j(t.technologies)}}function Jt(o,n){if(o&1&&g(0,Yt,15,9,"mat-card",28),o&2){let t=n.$implicit;m(t.live===!0?0:-1)}}function Qt(o,n){if(o&1&&(a(0,"div",27)(1,"mat-icon",33),s(2,"search_off"),i(),a(3,"h3"),s(4),i(),a(5,"p"),s(6,"Try searching for different keywords or technologies."),i()()),o&2){let t=l(2);c(4),H('No projects found for "',t.searchQuery(),'"')}}function Zt(o,n){if(o&1&&(a(0,"div",18)(1,"div",26),T(2,Jt,1,1,null,null,Ut),i(),g(4,Qt,7,1,"div",27),i()),o&2){let t=l();c(2),j(t.filteredProjects()),c(2),m(t.filteredProjects().length===0?4:-1)}}function $t(o,n){o&1&&(a(0,"div",19),f(1,"router-outlet"),i())}var vt=class o{constructor(n,t){this.router=n;this.route=t}searchInputRef;projects=ht;currentProject=x;destroy$=new E;dialogService=L(yt);hasHelp=A(()=>{let n=this.currentProject();return!!(n?.id&&z[n.id])});isProjectRoute=M(!1);isFullscreen=M(!1);fullscreenChange=new G;searchQuery=M("");isSearchActive=M(!1);filteredProjects=A(()=>{let n=this.searchQuery().toLowerCase().trim(),t=this.projects();return n?t.filter(e=>e.name.toLowerCase().includes(n)||e.description.toLowerCase().includes(n)||e.technologies.some(r=>r.toLowerCase().includes(n))):t});ngOnInit(){this.router.events.pipe(D(n=>n instanceof Y),R(this.destroy$)).subscribe(n=>{this.updateCurrentProject(n.url)}),this.updateCurrentProject(this.router.url)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}toggleSearch(){this.isSearchActive()||this.searchQuery()?(this.searchQuery.set(""),this.isSearchActive.set(!1)):(this.isSearchActive.set(!0),setTimeout(()=>{this.searchInputRef?.nativeElement.focus()},0))}onSearchBlur(){this.searchQuery().trim()||this.isSearchActive.set(!1)}updateCurrentProject(n){let t=n.split("/"),e=t[t.length-1];if(e&&e!=="projects"){let r=this.projects().find(d=>d.route===e);if(r){x.set(r),this.isProjectRoute.set(!0),this.searchQuery.set(""),this.isSearchActive.set(!1);return}}x.set(null),this.isProjectRoute.set(!1)}navigateToProject(n){let t=this.projects().find(e=>e.id===n);t&&(this.isProjectRoute.set(!0),this.searchQuery.set(""),this.isSearchActive.set(!1),this.router.navigate([t.route],{relativeTo:this.route}))}backToDashboard(){this.isProjectRoute.set(!1),this.isFullscreen()&&this.toggleFullscreen("normal"),this.router.navigate(["/projects"])}toggleFullscreen(n){let t=n==="fullscreen";this.isFullscreen.set(t),this.fullscreenChange.emit(t)}openHelpGuide(){let n=this.currentProject(),t=n?z[n.id]:void 0;n&&t&&this.dialogService.open({title:`${n.name} Guide`,icon:n.icon,iconColor:"var(--primary)",htmlContent:t,confirmText:"Got it!",hideCancel:!0,maxWidth:"800px"})}static \u0275fac=function(t){return new(t||o)(k(Z),k(J))};static \u0275cmp=F({type:o,selectors:[["app-project-lab"]],viewQuery:function(t,e){if(t&1&&B(Vt,5),t&2){let r;N(r=W())&&(e.searchInputRef=r.first)}},outputs:{fullscreenChange:"fullscreenChange"},decls:37,vars:19,consts:[["viewMenu","matMenu"],["searchInput",""],["appScrollReveal","",1,"section","projects-section"],[1,"projects-card"],[1,"main-header"],[1,"header-content"],["mat-icon-button","","aria-label","Back to dashboard",1,"back-button"],[1,"header-text"],[1,"header-title-wrapper"],["mat-icon-button","","aria-label","Open project guide",1,"help-action-btn"],[1,"header-search",3,"active"],["aria-label","View mode",1,"view-toggle","desktop-only",3,"change","value"],["value","normal","aria-label","Normal view"],["value","fullscreen","aria-label","Fullscreen view"],["mat-icon-button","",1,"mobile-only","view-menu-btn",3,"matMenuTriggerFor"],["xPosition","before"],["mat-menu-item","",3,"click","disabled"],[1,"content-container"],[1,"projects-dashboard"],[1,"project-content"],["mat-icon-button","","aria-label","Back to dashboard",1,"back-button",3,"click"],["mat-icon-button","","aria-label","Open project guide",1,"help-action-btn",3,"click"],[1,"header-search"],["type","text","placeholder","Search apps, tech...","autofocus","",1,"glass-search-input",3,"ngModel"],["mat-icon-button","",3,"mousedown","click"],["type","text","placeholder","Search apps, tech...","autofocus","",1,"glass-search-input",3,"ngModelChange","keyup.enter","blur","ngModel"],[1,"projects-grid"],[2,"text-align","center","padding","3rem","color","var(--text-secondary)"],["tabindex","0","role","button",1,"project-card"],[3,"innerHTML"],["mat-icon-button","","color","primary","aria-label","Open project",1,"project-launch-btn",3,"click"],[1,"project-description",3,"innerHTML"],[1,"project-technologies"],[2,"font-size","48px","width","48px","height","48px","opacity","0.5","margin-bottom","1rem"]],template:function(t,e){if(t&1&&(a(0,"section",2)(1,"mat-card",3)(2,"mat-card-header",4)(3,"div",5),g(4,Bt,3,0,"button",6),a(5,"div",7)(6,"div",8)(7,"mat-card-title"),s(8),i(),g(9,Nt,3,0,"button",9),i()(),g(10,Ht,5,5,"div",10),a(11,"mat-button-toggle-group",11),h("change",function(d){return e.toggleFullscreen(d.value)}),a(12,"mat-button-toggle",12)(13,"mat-icon"),s(14,"fullscreen_exit"),i()(),a(15,"mat-button-toggle",13)(16,"mat-icon"),s(17,"fullscreen"),i()()(),a(18,"button",14)(19,"mat-icon"),s(20),i()(),a(21,"mat-menu",15,0)(23,"button",16),h("click",function(){return e.toggleFullscreen("normal")}),a(24,"mat-icon"),s(25,"fullscreen_exit"),i(),a(26,"span"),s(27,"Normal View"),i()(),a(28,"button",16),h("click",function(){return e.toggleFullscreen("fullscreen")}),a(29,"mat-icon"),s(30,"fullscreen"),i(),a(31,"span"),s(32,"Fullscreen"),i()()()()(),a(33,"mat-card-content")(34,"div",17),g(35,Zt,5,1,"div",18),g(36,$t,2,0,"div",19),i()()()()),t&2){let r,d=I(22);_("fullscreen",e.isFullscreen()),c(),_("fullscreen-card",e.isFullscreen()),c(3),m(e.isProjectRoute()?4:-1),c(),_("hide-on-mobile-search",e.isSearchActive()&&!e.isProjectRoute()),c(3),O(e.isProjectRoute()?(r=e.currentProject())==null?null:r.name:"Project Lab"),c(),m(e.isProjectRoute()&&e.hasHelp()?9:-1),c(),m(e.isProjectRoute()?-1:10),c(),p("value",e.isFullscreen()?"fullscreen":"normal"),c(7),_("hide-on-mobile-search",e.isSearchActive()&&!e.isProjectRoute()),p("matMenuTriggerFor",d),c(2),O(e.isFullscreen()?"fullscreen":"more_vert"),c(3),p("disabled",!e.isFullscreen()),c(5),p("disabled",e.isFullscreen()),c(7),m(e.isProjectRoute()?-1:35),c(),m(e.isProjectRoute()?36:-1)}},dependencies:[q,dt,ct,st,lt,Q,et,$,K,tt,X,ot,nt,rt,at,pt,gt,mt,Ot,ft,Mt,Pt,ut,_t,bt,Ct,it,w],styles:[`@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_slideUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_slideDown{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_scaleIn{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}@keyframes _ngcontent-%COMP%_drift{0%{background-position:50% 50%}25%{background-position:60% 40%}50%{background-position:40% 60%}75%{background-position:55% 45%}to{background-position:50% 50%}}@keyframes _ngcontent-%COMP%_wave-motion-1{0%,to{transform:translateZ(0)}25%{transform:translate3d(30px,-20px,0)}50%{transform:translate3d(-20px,10px,0)}75%{transform:translate3d(10px,15px,0)}}@keyframes _ngcontent-%COMP%_wave-motion-2{0%,to{transform:translateZ(0)}25%{transform:translate3d(-25px,15px,0)}50%{transform:translate3d(20px,-10px,0)}75%{transform:translate3d(-15px,-20px,0)}}@keyframes _ngcontent-%COMP%_wave-motion-3{0%,to{transform:translateZ(0)}25%{transform:translate3d(20px,25px,0)}50%{transform:translate3d(-30px,-15px,0)}75%{transform:translate3d(25px,-10px,0)}}@keyframes _ngcontent-%COMP%_wave-motion-4{0%,to{transform:translateZ(0)}25%{transform:translate3d(-20px,-25px,0)}50%{transform:translate3d(25px,20px,0)}75%{transform:translate3d(-10px,10px,0)}}@keyframes _ngcontent-%COMP%_wave-motion-5{0%,to{transform:translateZ(0)}25%{transform:translate3d(15px,-30px,0)}50%{transform:translate3d(-25px,25px,0)}75%{transform:translate3d(20px,-15px,0)}}*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-sizing:border-box}[_ngcontent-%COMP%]:root{--vh: 1vh;--font-family-base: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;--font-family-mono: Courier New, Courier, monospace;--font-size-xs: .75rem;--font-size-sm: .875rem;--font-size-base: 1rem;--font-size-lg: 1.125rem;--font-size-xl: 1.25rem;--font-size-2xl: 1.5rem;--font-size-3xl: 2rem;--font-size-4xl: 2.5rem;--font-size-h1: 2.5rem;--font-size-h2: 2rem;--font-size-h3: 1.75rem;--font-size-h4: 1.5rem;--font-size-h5: 1.25rem;--font-size-h6: 1.125rem;--font-weight-light: 300;--font-weight-normal: 400;--font-weight-medium: 500;--font-weight-semibold: 600;--font-weight-bold: 700;--font-weight-extrabold: 800;--line-height-tight: 1.2;--line-height-normal: 1.5;--line-height-base: 1.6;--line-height-relaxed: 1.8;--line-height-loose: 2;--spacing-0: 0;--spacing-xs: .25rem;--spacing-sm: .5rem;--spacing-md: 1rem;--spacing-lg: 1.5rem;--spacing-xl: 2rem;--spacing-2xl: 3rem;--spacing-3xl: 4rem;--spacing-4xl: 5rem;--spacing-5xl: 6rem;--spacing-custom-indent: 2rem;--radius-none: 0;--radius-sm: .25rem;--radius-md: .5rem;--radius-lg: .75rem;--radius-xl: 1rem;--radius-2xl: 1.5rem;--radius-3xl: 2rem;--radius-full: 9999px;--layout-header-height: 45px;--layout-search-height: 36px;--layout-pane-header-height: 48px;--layout-tree-row-height: 24px;--layout-search-min-width: 280px;--layout-sidebar-min-width: 300px;--layout-icon-xs: 12px;--layout-icon-sm: 18px;--layout-icon-md: 20px;--layout-icon-lg: 24px;--layout-icon-xl: 40px;--layout-tree-indent: 20px;--layout-tree-line-width: 1px;--layout-toggle-box-size: 9px;--layout-avatar-size: 40px}html[_ngcontent-%COMP%]{font-size:16px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}body[_ngcontent-%COMP%]{margin:0;font-family:var(--font-family-base);font-size:var(--font-size-base);line-height:var(--line-height-base);font-weight:var(--font-weight-normal);color:var(--text-primary);background:var(--bg-primary);overflow:hidden;height:100%;transition:background-color .3s ease-in-out}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0;color:inherit;font-weight:700;line-height:1.2;text-shadow:var(--text-shadow);margin-bottom:1rem}h1[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;line-height:1.2;margin-bottom:1rem}h2[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;line-height:1.2;margin-bottom:1rem}h3[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:700;line-height:1.2;margin-bottom:1rem}h4[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;line-height:1.2;margin-bottom:1rem}h5[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:700;line-height:1.2;margin-bottom:1rem}h6[_ngcontent-%COMP%]{font-size:1.125rem;font-weight:700;line-height:1.2;margin-bottom:1rem}p[_ngcontent-%COMP%]{margin:0;color:inherit;font-size:1rem;font-weight:400;line-height:1.6;letter-spacing:0;margin-bottom:1rem}p[_ngcontent-%COMP%]:last-child{margin-bottom:0}a[_ngcontent-%COMP%]{color:var(--primary);text-decoration:none;transition:all .3s ease-in-out}a[_ngcontent-%COMP%]:hover{text-decoration:underline}a[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--primary);outline-offset:2px}ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}img[_ngcontent-%COMP%]{max-width:100%;height:auto;display:block}button[_ngcontent-%COMP%]{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;background:transparent;border:none;padding:0;cursor:pointer}button[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--primary);outline-offset:2px}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit}[_ngcontent-%COMP%]::selection{background:var(--primary);color:#fff}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px;height:8px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:var(--scrollbar-track)}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb);border-radius:4px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:var(--scrollbar-thumb-hover)}*[_ngcontent-%COMP%]{scrollbar-width:thin;scrollbar-color:var(--scrollbar-thumb) var(--scrollbar-track)}.glass[_ngcontent-%COMP%], .icon-glass[_ngcontent-%COMP%], .skill-chip[_ngcontent-%COMP%], mat-chip[_ngcontent-%COMP%], .mat-mdc-chip[_ngcontent-%COMP%], .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%], .mat-mdc-button-toggle-group[_ngcontent-%COMP%], .mat-mdc-button[_ngcontent-%COMP%], .mat-mdc-raised-button[_ngcontent-%COMP%], .mat-mdc-flat-button[_ngcontent-%COMP%], .mat-mdc-outlined-button[_ngcontent-%COMP%], .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%], mat-toolbar[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%], .mat-mdc-card[_ngcontent-%COMP%]{position:relative;background:var(--glass-bg);backdrop-filter:blur(16px) saturate(200%);-webkit-backdrop-filter:blur(16px) saturate(200%);box-shadow:0 10px 40px var(--glass-shadow),inset 1px 1px 1px #fff6,inset -1px -1px 2px var(--glass-inset-dark),inset 0 10px 20px #ffffff1a;border:1px solid var(--glass-border);transform:translateZ(0);will-change:transform,opacity;backface-visibility:hidden;perspective:1000px;border-radius:.75rem;padding-left:.5rem;padding-right:.5rem;overflow:hidden}.glass[_ngcontent-%COMP%]:before, .icon-glass[_ngcontent-%COMP%]:before, .skill-chip[_ngcontent-%COMP%]:before, mat-chip[_ngcontent-%COMP%]:before, .mat-mdc-chip[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]:before, .mat-mdc-button[_ngcontent-%COMP%]:before, .mat-mdc-raised-button[_ngcontent-%COMP%]:before, .mat-mdc-flat-button[_ngcontent-%COMP%]:before, .mat-mdc-outlined-button[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, mat-toolbar[_ngcontent-%COMP%]:before, mat-card[_ngcontent-%COMP%]:before, .mat-mdc-card[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");opacity:.02;z-index:1;pointer-events:none;mix-blend-mode:overlay;transform:translateZ(0);will-change:transform,opacity;backface-visibility:hidden;perspective:1000px}.glass[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%]:before, .icon-glass[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%]:before, .glass[_ngcontent-%COMP%]   .icon-glass[_ngcontent-%COMP%]:before, .icon-glass[_ngcontent-%COMP%]   .icon-glass[_ngcontent-%COMP%]:before, .skill-chip[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%]:before, .skill-chip[_ngcontent-%COMP%]   .icon-glass[_ngcontent-%COMP%]:before, mat-chip[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%]:before, mat-chip[_ngcontent-%COMP%]   .icon-glass[_ngcontent-%COMP%]:before, .mat-mdc-chip[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%]:before, .mat-mdc-chip[_ngcontent-%COMP%]   .icon-glass[_ngcontent-%COMP%]:before, .glass[_ngcontent-%COMP%]   .skill-chip[_ngcontent-%COMP%]:before, .icon-glass[_ngcontent-%COMP%]   .skill-chip[_ngcontent-%COMP%]:before, .skill-chip[_ngcontent-%COMP%]   .skill-chip[_ngcontent-%COMP%]:before, mat-chip[_ngcontent-%COMP%]   .skill-chip[_ngcontent-%COMP%]:before, .mat-mdc-chip[_ngcontent-%COMP%]   .skill-chip[_ngcontent-%COMP%]:before, .glass[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]:before, .icon-glass[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]:before, .skill-chip[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]:before, mat-chip[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]:before, .mat-mdc-chip[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]:before, .glass[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]:before, .icon-glass[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]:before, .skill-chip[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]:before, mat-chip[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]:before, .mat-mdc-chip[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]   .icon-glass[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]   .skill-chip[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]:before, .glass[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .icon-glass[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .skill-chip[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, mat-chip[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .mat-mdc-chip[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .icon-glass[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .skill-chip[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .icon-glass[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .skill-chip[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .glass[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]:before, .icon-glass[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]:before, .skill-chip[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]:before, mat-chip[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]:before, .mat-mdc-chip[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]:before, .mat-mdc-button[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%]:before, .mat-mdc-button[_ngcontent-%COMP%]   .icon-glass[_ngcontent-%COMP%]:before, .mat-mdc-button[_ngcontent-%COMP%]   .skill-chip[_ngcontent-%COMP%]:before, .mat-mdc-button[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]:before, .mat-mdc-button[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]:before, .mat-mdc-button[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .mat-mdc-button[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]:before, .mat-mdc-raised-button[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%]:before, .mat-mdc-raised-button[_ngcontent-%COMP%]   .icon-glass[_ngcontent-%COMP%]:before, .mat-mdc-raised-button[_ngcontent-%COMP%]   .skill-chip[_ngcontent-%COMP%]:before, .mat-mdc-raised-button[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]:before, .mat-mdc-raised-button[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]:before, .mat-mdc-raised-button[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-raised-button[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .mat-mdc-raised-button[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]:before, .mat-mdc-flat-button[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%]:before, .mat-mdc-flat-button[_ngcontent-%COMP%]   .icon-glass[_ngcontent-%COMP%]:before, .mat-mdc-flat-button[_ngcontent-%COMP%]   .skill-chip[_ngcontent-%COMP%]:before, .mat-mdc-flat-button[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]:before, .mat-mdc-flat-button[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]:before, .mat-mdc-flat-button[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-flat-button[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .mat-mdc-flat-button[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]:before, .mat-mdc-outlined-button[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%]:before, .mat-mdc-outlined-button[_ngcontent-%COMP%]   .icon-glass[_ngcontent-%COMP%]:before, .mat-mdc-outlined-button[_ngcontent-%COMP%]   .skill-chip[_ngcontent-%COMP%]:before, .mat-mdc-outlined-button[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]:before, .mat-mdc-outlined-button[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]:before, .mat-mdc-outlined-button[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-outlined-button[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .mat-mdc-outlined-button[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]:before, .glass[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]:before, .icon-glass[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]:before, .skill-chip[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]:before, mat-chip[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]:before, .mat-mdc-chip[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]:before, .mat-mdc-button[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]:before, .mat-mdc-raised-button[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]:before, .mat-mdc-flat-button[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]:before, .mat-mdc-outlined-button[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]:before, .glass[_ngcontent-%COMP%]   .mat-mdc-raised-button[_ngcontent-%COMP%]:before, .icon-glass[_ngcontent-%COMP%]   .mat-mdc-raised-button[_ngcontent-%COMP%]:before, .skill-chip[_ngcontent-%COMP%]   .mat-mdc-raised-button[_ngcontent-%COMP%]:before, mat-chip[_ngcontent-%COMP%]   .mat-mdc-raised-button[_ngcontent-%COMP%]:before, .mat-mdc-chip[_ngcontent-%COMP%]   .mat-mdc-raised-button[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]   .mat-mdc-raised-button[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-raised-button[_ngcontent-%COMP%]:before, .mat-mdc-button[_ngcontent-%COMP%]   .mat-mdc-raised-button[_ngcontent-%COMP%]:before, .mat-mdc-raised-button[_ngcontent-%COMP%]   .mat-mdc-raised-button[_ngcontent-%COMP%]:before, .mat-mdc-flat-button[_ngcontent-%COMP%]   .mat-mdc-raised-button[_ngcontent-%COMP%]:before, .mat-mdc-outlined-button[_ngcontent-%COMP%]   .mat-mdc-raised-button[_ngcontent-%COMP%]:before, .glass[_ngcontent-%COMP%]   .mat-mdc-flat-button[_ngcontent-%COMP%]:before, .icon-glass[_ngcontent-%COMP%]   .mat-mdc-flat-button[_ngcontent-%COMP%]:before, .skill-chip[_ngcontent-%COMP%]   .mat-mdc-flat-button[_ngcontent-%COMP%]:before, mat-chip[_ngcontent-%COMP%]   .mat-mdc-flat-button[_ngcontent-%COMP%]:before, .mat-mdc-chip[_ngcontent-%COMP%]   .mat-mdc-flat-button[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]   .mat-mdc-flat-button[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-flat-button[_ngcontent-%COMP%]:before, .mat-mdc-button[_ngcontent-%COMP%]   .mat-mdc-flat-button[_ngcontent-%COMP%]:before, .mat-mdc-raised-button[_ngcontent-%COMP%]   .mat-mdc-flat-button[_ngcontent-%COMP%]:before, .mat-mdc-flat-button[_ngcontent-%COMP%]   .mat-mdc-flat-button[_ngcontent-%COMP%]:before, .mat-mdc-outlined-button[_ngcontent-%COMP%]   .mat-mdc-flat-button[_ngcontent-%COMP%]:before, .glass[_ngcontent-%COMP%]   .mat-mdc-outlined-button[_ngcontent-%COMP%]:before, .icon-glass[_ngcontent-%COMP%]   .mat-mdc-outlined-button[_ngcontent-%COMP%]:before, .skill-chip[_ngcontent-%COMP%]   .mat-mdc-outlined-button[_ngcontent-%COMP%]:before, mat-chip[_ngcontent-%COMP%]   .mat-mdc-outlined-button[_ngcontent-%COMP%]:before, .mat-mdc-chip[_ngcontent-%COMP%]   .mat-mdc-outlined-button[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]   .mat-mdc-outlined-button[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-outlined-button[_ngcontent-%COMP%]:before, .mat-mdc-button[_ngcontent-%COMP%]   .mat-mdc-outlined-button[_ngcontent-%COMP%]:before, .mat-mdc-raised-button[_ngcontent-%COMP%]   .mat-mdc-outlined-button[_ngcontent-%COMP%]:before, .mat-mdc-flat-button[_ngcontent-%COMP%]   .mat-mdc-outlined-button[_ngcontent-%COMP%]:before, .mat-mdc-outlined-button[_ngcontent-%COMP%]   .mat-mdc-outlined-button[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]   .icon-glass[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]   .skill-chip[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]   .mat-mdc-raised-button[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]   .mat-mdc-flat-button[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]   .mat-mdc-outlined-button[_ngcontent-%COMP%]:before, .glass[_ngcontent-%COMP%]   .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .icon-glass[_ngcontent-%COMP%]   .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .skill-chip[_ngcontent-%COMP%]   .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, mat-chip[_ngcontent-%COMP%]   .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-chip[_ngcontent-%COMP%]   .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]   .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-button[_ngcontent-%COMP%]   .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-raised-button[_ngcontent-%COMP%]   .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-flat-button[_ngcontent-%COMP%]   .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-outlined-button[_ngcontent-%COMP%]   .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .icon-glass[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .skill-chip[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-raised-button[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-flat-button[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-outlined-button[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, mat-toolbar[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%]:before, mat-toolbar[_ngcontent-%COMP%]   .icon-glass[_ngcontent-%COMP%]:before, mat-toolbar[_ngcontent-%COMP%]   .skill-chip[_ngcontent-%COMP%]:before, mat-toolbar[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]:before, mat-toolbar[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]:before, mat-toolbar[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, mat-toolbar[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]:before, mat-toolbar[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]:before, mat-toolbar[_ngcontent-%COMP%]   .mat-mdc-raised-button[_ngcontent-%COMP%]:before, mat-toolbar[_ngcontent-%COMP%]   .mat-mdc-flat-button[_ngcontent-%COMP%]:before, mat-toolbar[_ngcontent-%COMP%]   .mat-mdc-outlined-button[_ngcontent-%COMP%]:before, mat-toolbar[_ngcontent-%COMP%]   .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .glass[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]:before, .icon-glass[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]:before, .skill-chip[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]:before, mat-chip[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]:before, .mat-mdc-chip[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]:before, .mat-mdc-button[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]:before, .mat-mdc-raised-button[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]:before, .mat-mdc-flat-button[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]:before, .mat-mdc-outlined-button[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]:before, mat-toolbar[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]:before, mat-card[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%]:before, mat-card[_ngcontent-%COMP%]   .icon-glass[_ngcontent-%COMP%]:before, mat-card[_ngcontent-%COMP%]   .skill-chip[_ngcontent-%COMP%]:before, mat-card[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]:before, mat-card[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]:before, mat-card[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, mat-card[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]:before, mat-card[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]:before, mat-card[_ngcontent-%COMP%]   .mat-mdc-raised-button[_ngcontent-%COMP%]:before, mat-card[_ngcontent-%COMP%]   .mat-mdc-flat-button[_ngcontent-%COMP%]:before, mat-card[_ngcontent-%COMP%]   .mat-mdc-outlined-button[_ngcontent-%COMP%]:before, mat-card[_ngcontent-%COMP%]   .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, mat-card[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]:before, .glass[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:before, .icon-glass[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:before, .skill-chip[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:before, mat-chip[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:before, .mat-mdc-chip[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:before, .mat-mdc-button[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:before, .mat-mdc-raised-button[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:before, .mat-mdc-flat-button[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:before, .mat-mdc-outlined-button[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:before, mat-toolbar[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:before, mat-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:before, .mat-mdc-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:before, .glass[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]:before, .icon-glass[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]:before, .skill-chip[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]:before, mat-chip[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]:before, .mat-mdc-chip[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]:before, .mat-mdc-button[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]:before, .mat-mdc-raised-button[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]:before, .mat-mdc-flat-button[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]:before, .mat-mdc-outlined-button[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]:before, mat-toolbar[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]:before, mat-card[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]:before, .mat-mdc-card[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]:before, .mat-mdc-card[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%]:before, .mat-mdc-card[_ngcontent-%COMP%]   .icon-glass[_ngcontent-%COMP%]:before, .mat-mdc-card[_ngcontent-%COMP%]   .skill-chip[_ngcontent-%COMP%]:before, .mat-mdc-card[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]:before, .mat-mdc-card[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]:before, .mat-mdc-card[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .mat-mdc-card[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]:before, .mat-mdc-card[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]:before, .mat-mdc-card[_ngcontent-%COMP%]   .mat-mdc-raised-button[_ngcontent-%COMP%]:before, .mat-mdc-card[_ngcontent-%COMP%]   .mat-mdc-flat-button[_ngcontent-%COMP%]:before, .mat-mdc-card[_ngcontent-%COMP%]   .mat-mdc-outlined-button[_ngcontent-%COMP%]:before, .mat-mdc-card[_ngcontent-%COMP%]   .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-card[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]:before{display:none!important}.glass[_ngcontent-%COMP%]:after, .icon-glass[_ngcontent-%COMP%]:after, .skill-chip[_ngcontent-%COMP%]:after, mat-chip[_ngcontent-%COMP%]:after, .mat-mdc-chip[_ngcontent-%COMP%]:after, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:after, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]:after, .mat-mdc-button[_ngcontent-%COMP%]:after, .mat-mdc-raised-button[_ngcontent-%COMP%]:after, .mat-mdc-flat-button[_ngcontent-%COMP%]:after, .mat-mdc-outlined-button[_ngcontent-%COMP%]:after, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:after, mat-toolbar[_ngcontent-%COMP%]:after, mat-card[_ngcontent-%COMP%]:after, .mat-mdc-card[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;background:linear-gradient(110deg,rgba(255,255,255,.25) 0%,rgba(255,255,255,.05) 15%,transparent 30%,transparent 70%,rgba(255,255,255,.02) 85%,rgba(255,255,255,.1) 100%);z-index:2;pointer-events:none;transform:translateZ(0);will-change:transform,opacity;backface-visibility:hidden;perspective:1000px}.glass[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .icon-glass[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .skill-chip[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], mat-chip[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .mat-mdc-chip[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .mat-mdc-button-toggle-group[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .mat-mdc-button[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .mat-mdc-raised-button[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .mat-mdc-flat-button[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .mat-mdc-outlined-button[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], mat-toolbar[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .mat-mdc-card[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;z-index:3}.dark-theme[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%]:before, .dark-theme[_ngcontent-%COMP%]   .icon-glass[_ngcontent-%COMP%]:before, .dark-theme[_ngcontent-%COMP%]   .skill-chip[_ngcontent-%COMP%]:before, .dark-theme[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]:before, .dark-theme[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]:before, .dark-theme[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .dark-theme[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:before, .dark-theme[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]:before, .dark-theme[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]:before, .dark-theme[_ngcontent-%COMP%]   .mat-mdc-raised-button[_ngcontent-%COMP%]:before, .dark-theme[_ngcontent-%COMP%]   .mat-mdc-flat-button[_ngcontent-%COMP%]:before, .dark-theme[_ngcontent-%COMP%]   .mat-mdc-outlined-button[_ngcontent-%COMP%]:before, .dark-theme[_ngcontent-%COMP%]   .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .dark-theme[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .dark-theme[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]:before, .dark-theme[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:before, .dark-theme[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]:before{opacity:.015;mix-blend-mode:overlay}.dark-theme[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%]:after, .dark-theme[_ngcontent-%COMP%]   .icon-glass[_ngcontent-%COMP%]:after, .dark-theme[_ngcontent-%COMP%]   .skill-chip[_ngcontent-%COMP%]:after, .dark-theme[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]:after, .dark-theme[_ngcontent-%COMP%]   .mat-mdc-chip[_ngcontent-%COMP%]:after, .dark-theme[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:after, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .dark-theme[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]:after, .dark-theme[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]:after, .dark-theme[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]:after, .dark-theme[_ngcontent-%COMP%]   .mat-mdc-raised-button[_ngcontent-%COMP%]:after, .dark-theme[_ngcontent-%COMP%]   .mat-mdc-flat-button[_ngcontent-%COMP%]:after, .dark-theme[_ngcontent-%COMP%]   .mat-mdc-outlined-button[_ngcontent-%COMP%]:after, .dark-theme[_ngcontent-%COMP%]   .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:after, .mat-mdc-tab-group[_ngcontent-%COMP%]   .dark-theme[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:after, .dark-theme[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]:after, .dark-theme[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:after, .dark-theme[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]:after{background:linear-gradient(180deg,rgba(255,255,255,.15) 0%,rgba(255,255,255,.02) 0%,transparent 30%,transparent 70%,rgba(255,255,255,.01) 100%,rgba(255,255,255,.05) 100%)}mat-card[_ngcontent-%COMP%], .mat-mdc-card[_ngcontent-%COMP%]{transition:transform .3s ease-in-out;color:inherit;background:var(--glass-bg)!important}mat-card[_ngcontent-%COMP%]:before, mat-card[_ngcontent-%COMP%]:after, .mat-mdc-card[_ngcontent-%COMP%]:before, .mat-mdc-card[_ngcontent-%COMP%]:after{content:""!important;position:absolute!important;display:block!important}.mat-mdc-card-header[_ngcontent-%COMP%], .mat-mdc-card-content[_ngcontent-%COMP%], .mat-mdc-card-actions[_ngcontent-%COMP%], .mat-mdc-card-title[_ngcontent-%COMP%], .mat-mdc-card-subtitle[_ngcontent-%COMP%]{position:relative;z-index:3;color:inherit;padding:0rem}.mat-mdc-card-title[_ngcontent-%COMP%]{font-size:h4;font-weight:600;line-height:1.2;letter-spacing:0;text-shadow:var(--text-shadow)}.mat-mdc-card-subtitle[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;line-height:1.6;letter-spacing:0;color:var(--text-secondary);opacity:1;text-shadow:var(--text-shadow-subtle)}mat-toolbar[_ngcontent-%COMP%]{border-radius:0;border-top:none;border-left:none;border-right:none;background:var(--glass-bg)!important;color:var(--text-primary)}mat-toolbar[_ngcontent-%COMP%]:before, mat-toolbar[_ngcontent-%COMP%]:after{border-radius:0}.mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]{border-top-left-radius:.75rem;border-top-right-radius:.75rem;padding:.5rem;background:var(--glass-bg)!important}.mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, .mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:after{border-top-left-radius:.75rem;border-top-right-radius:.75rem}.mat-mdc-tab-group[_ngcontent-%COMP%]   .mat-mdc-tab-body-wrapper[_ngcontent-%COMP%]{background:transparent!important}.mat-mdc-button[_ngcontent-%COMP%], .mat-mdc-raised-button[_ngcontent-%COMP%], .mat-mdc-flat-button[_ngcontent-%COMP%], .mat-mdc-outlined-button[_ngcontent-%COMP%]{border-radius:.75rem;padding:1rem 1.5rem;font-size:1rem;font-weight:500;line-height:1.6;letter-spacing:0;text-shadow:var(--text-shadow-subtle);transition:transform .3s ease-in-out;min-height:auto;background:var(--glass-bg)!important;color:var(--text-primary)}.mat-mdc-button[_ngcontent-%COMP%]:before, .mat-mdc-button[_ngcontent-%COMP%]:after, .mat-mdc-raised-button[_ngcontent-%COMP%]:before, .mat-mdc-raised-button[_ngcontent-%COMP%]:after, .mat-mdc-flat-button[_ngcontent-%COMP%]:before, .mat-mdc-flat-button[_ngcontent-%COMP%]:after, .mat-mdc-outlined-button[_ngcontent-%COMP%]:before, .mat-mdc-outlined-button[_ngcontent-%COMP%]:after{border-radius:.75rem}.mat-mdc-button[_ngcontent-%COMP%]:hover, .mat-mdc-raised-button[_ngcontent-%COMP%]:hover, .mat-mdc-flat-button[_ngcontent-%COMP%]:hover, .mat-mdc-outlined-button[_ngcontent-%COMP%]:hover{background:var(--glass-inset)!important}.mat-mdc-button-toggle-group[_ngcontent-%COMP%]{border-radius:1.5rem;padding:.25rem;overflow:hidden;background:var(--glass-bg)!important}.mat-mdc-button-toggle-group[_ngcontent-%COMP%]:before, .mat-mdc-button-toggle-group[_ngcontent-%COMP%]:after{border-radius:1.5rem}.mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle[_ngcontent-%COMP%]{background:transparent!important;border:none!important;border-radius:1rem;color:var(--text-primary)}.mat-mdc-button-toggle-group[_ngcontent-%COMP%]   .mat-mdc-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%]{background:var(--glass-inset)!important}.skill-chip[_ngcontent-%COMP%], mat-chip[_ngcontent-%COMP%], .mat-mdc-chip[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;line-height:1.6;letter-spacing:0;padding-left:1rem;padding-right:1rem;padding-top:6px!important;padding-bottom:6px!important;border-radius:.75rem;text-shadow:var(--text-shadow-subtle);display:inline-flex!important;align-items:center!important;justify-content:center!important;background:var(--glass-bg)!important;color:var(--text-primary)!important;min-height:32px;height:auto!important;line-height:1.5!important}.skill-chip[_ngcontent-%COMP%]:before, .skill-chip[_ngcontent-%COMP%]:after, mat-chip[_ngcontent-%COMP%]:before, mat-chip[_ngcontent-%COMP%]:after, .mat-mdc-chip[_ngcontent-%COMP%]:before, .mat-mdc-chip[_ngcontent-%COMP%]:after{border-radius:.75rem}.skill-chip[_ngcontent-%COMP%]   .mat-mdc-chip-primary-focus-indicator[_ngcontent-%COMP%], mat-chip[_ngcontent-%COMP%]   .mat-mdc-chip-primary-focus-indicator[_ngcontent-%COMP%], .mat-mdc-chip[_ngcontent-%COMP%]   .mat-mdc-chip-primary-focus-indicator[_ngcontent-%COMP%]{background:transparent}.skill-chip[_ngcontent-%COMP%]   .mat-mdc-chip-action-label[_ngcontent-%COMP%], .skill-chip[_ngcontent-%COMP%]   .mat-mdc-chip-text-label[_ngcontent-%COMP%], .skill-chip[_ngcontent-%COMP%]   .mdc-evolution-chip__text-label[_ngcontent-%COMP%], mat-chip[_ngcontent-%COMP%]   .mat-mdc-chip-action-label[_ngcontent-%COMP%], mat-chip[_ngcontent-%COMP%]   .mat-mdc-chip-text-label[_ngcontent-%COMP%], mat-chip[_ngcontent-%COMP%]   .mdc-evolution-chip__text-label[_ngcontent-%COMP%], .mat-mdc-chip[_ngcontent-%COMP%]   .mat-mdc-chip-action-label[_ngcontent-%COMP%], .mat-mdc-chip[_ngcontent-%COMP%]   .mat-mdc-chip-text-label[_ngcontent-%COMP%], .mat-mdc-chip[_ngcontent-%COMP%]   .mdc-evolution-chip__text-label[_ngcontent-%COMP%]{color:inherit!important;display:flex!important;align-items:center!important;line-height:1.5!important;white-space:normal!important}.skill-chip[_ngcontent-%COMP%]   .mat-mdc-chip-action[_ngcontent-%COMP%], mat-chip[_ngcontent-%COMP%]   .mat-mdc-chip-action[_ngcontent-%COMP%], .mat-mdc-chip[_ngcontent-%COMP%]   .mat-mdc-chip-action[_ngcontent-%COMP%]{display:flex!important;align-items:center!important;justify-content:center!important;height:100%!important}.skill-chip[_ngcontent-%COMP%]   .mdc-evolution-chip__action--primary[_ngcontent-%COMP%], mat-chip[_ngcontent-%COMP%]   .mdc-evolution-chip__action--primary[_ngcontent-%COMP%], .mat-mdc-chip[_ngcontent-%COMP%]   .mdc-evolution-chip__action--primary[_ngcontent-%COMP%]{display:flex!important;align-items:center!important;padding:0!important}.icon-glass[_ngcontent-%COMP%]{border-radius:.5rem;padding:.5rem;width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;font-size:1.25rem}.icon-glass[_ngcontent-%COMP%]:before, .icon-glass[_ngcontent-%COMP%]:after{border-radius:.5rem}.scroll-container[_ngcontent-%COMP%]{height:100%;overflow-y:scroll;scroll-snap-type:y mandatory;-webkit-overflow-scrolling:touch;position:relative;z-index:1;scroll-behavior:smooth;scrollbar-width:none;-ms-overflow-style:none}.scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.scroll-container[_ngcontent-%COMP%]{will-change:scroll-position}.section[_ngcontent-%COMP%]{height:100%;min-height:100%;scroll-snap-align:start;display:flex;align-items:center;justify-content:center;padding:.25rem;position:relative;transition:opacity,transform .6s smooth}@media(max-width:768px){.section[_ngcontent-%COMP%]{padding:1rem}}.animate-in[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.animate-in[_ngcontent-%COMP%]   .timeline-card[_ngcontent-%COMP%]{opacity:1;transform:translateY(0);transition:opacity,transform .4s smooth}.animate-in[_ngcontent-%COMP%]   .timeline-card[_ngcontent-%COMP%]:nth-child(1){transition-delay:.1s}.animate-in[_ngcontent-%COMP%]   .timeline-card[_ngcontent-%COMP%]:nth-child(2){transition-delay:.2s}.animate-in[_ngcontent-%COMP%]   .timeline-card[_ngcontent-%COMP%]:nth-child(3){transition-delay:.3s}.section[_ngcontent-%COMP%]:not(.animate-in)   .timeline-card[_ngcontent-%COMP%]{opacity:0;transform:translateY(20px)}.hero-card[_ngcontent-%COMP%]{border-radius:2rem;transform:translateZ(0);will-change:transform,opacity;backface-visibility:hidden;perspective:1000px}.hero-card[_ngcontent-%COMP%]:before, .hero-card[_ngcontent-%COMP%]:after{border-radius:2rem}.timeline-card[_ngcontent-%COMP%]{border-radius:.75rem;margin-bottom:1rem;transform:translateZ(0);will-change:transform,opacity;backface-visibility:hidden;perspective:1000px}.timeline-card[_ngcontent-%COMP%]:before, .timeline-card[_ngcontent-%COMP%]:after{border-radius:.75rem}.projects-card[_ngcontent-%COMP%]{border-radius:.75rem;transform:translateZ(0);will-change:transform,opacity;backface-visibility:hidden;perspective:1000px}.projects-card[_ngcontent-%COMP%]:before, .projects-card[_ngcontent-%COMP%]:after{border-radius:.75rem}.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px;height:8px}.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:var(--scrollbar-track);border-radius:4px}.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb);border-radius:4px}.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:var(--scrollbar-thumb-hover)}.custom-scrollbar[_ngcontent-%COMP%]{scrollbar-width:thin;scrollbar-color:var(--scrollbar-thumb) var(--scrollbar-track)}.text-outline[_ngcontent-%COMP%]{text-shadow:-1px -1px 0 rgba(255,255,255,.5),1px -1px 0 rgba(255,255,255,.5),-1px 1px 0 rgba(255,255,255,.5),1px 1px 0 rgba(255,255,255,.5),0 0 4px rgba(0,0,0,.5)}.dark-theme[_ngcontent-%COMP%]   .text-outline[_ngcontent-%COMP%]{text-shadow:-1px -1px 0 rgba(0,0,0,.8),1px -1px 0 rgba(0,0,0,.8),-1px 1px 0 rgba(0,0,0,.8),1px 1px 0 rgba(0,0,0,.8),0 0 4px rgba(255,255,255,.3)}body[_ngcontent-%COMP%]{margin:0;padding:0;overflow:hidden;position:relative}body[_ngcontent-%COMP%]:before{display:none}body.dark-theme[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%]:before{background-image:repeating-linear-gradient(45deg,transparent,transparent 35px,rgba(255,255,255,.005) 35px,rgba(255,255,255,.005) 70px),url(#glass-pattern-dark)}.svg-background[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:-1;pointer-events:none}.svg-background[_ngcontent-%COMP%]   .bg-rect[_ngcontent-%COMP%]{fill:var(--bg-primary)}.svg-background[_ngcontent-%COMP%]   .wave-gradient[_ngcontent-%COMP%]   stop[_ngcontent-%COMP%]:first-child{stop-color:var(--gradient-wave-start)}.svg-background[_ngcontent-%COMP%]   .wave-gradient[_ngcontent-%COMP%]   stop[_ngcontent-%COMP%]:last-child{stop-color:var(--gradient-wave-end)}@media(prefers-color-scheme:dark){.glass[_ngcontent-%COMP%]{filter:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence baseFrequency="0.9" numOctaves="4" seed="5"/></filter></svg>#noise');filter:contrast(1.01)}}body.performance-mode[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{box-shadow:none!important;text-shadow:none!important;transition:none!important;animation-duration:.01s!important;animation-delay:0s!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;filter:none!important}body.performance-mode[_ngcontent-%COMP%]   .svg-background[_ngcontent-%COMP%], body.performance-mode[_ngcontent-%COMP%]   .wave-background[_ngcontent-%COMP%]{display:none!important}body.performance-mode[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%], body.performance-mode[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%], body.performance-mode[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%], body.performance-mode[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%], body.performance-mode[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%], body.performance-mode[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%], body.performance-mode[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%], body.performance-mode[_ngcontent-%COMP%]   .skill-chip[_ngcontent-%COMP%], body.performance-mode[_ngcontent-%COMP%]   .icon-glass[_ngcontent-%COMP%], body.performance-mode[_ngcontent-%COMP%]   .glass-dialog-wrapper[_ngcontent-%COMP%], body.performance-mode[_ngcontent-%COMP%]   .mat-mdc-snack-bar-container[_ngcontent-%COMP%]{background:var(--bg-performance)!important;border:1px solid var(--border-performance)!important;transform:none!important;will-change:auto!important}body.performance-mode[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%]:before, body.performance-mode[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%]:after, body.performance-mode[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:before, body.performance-mode[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:after, body.performance-mode[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]:before, body.performance-mode[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]:after, body.performance-mode[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]:before, body.performance-mode[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]:after, body.performance-mode[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:before, body.performance-mode[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:after, body.performance-mode[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]:before, body.performance-mode[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]:after, body.performance-mode[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]:before, body.performance-mode[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]:after, body.performance-mode[_ngcontent-%COMP%]   .skill-chip[_ngcontent-%COMP%]:before, body.performance-mode[_ngcontent-%COMP%]   .skill-chip[_ngcontent-%COMP%]:after, body.performance-mode[_ngcontent-%COMP%]   .icon-glass[_ngcontent-%COMP%]:before, body.performance-mode[_ngcontent-%COMP%]   .icon-glass[_ngcontent-%COMP%]:after, body.performance-mode[_ngcontent-%COMP%]   .glass-dialog-wrapper[_ngcontent-%COMP%]:before, body.performance-mode[_ngcontent-%COMP%]   .glass-dialog-wrapper[_ngcontent-%COMP%]:after, body.performance-mode[_ngcontent-%COMP%]   .mat-mdc-snack-bar-container[_ngcontent-%COMP%]:before, body.performance-mode[_ngcontent-%COMP%]   .mat-mdc-snack-bar-container[_ngcontent-%COMP%]:after{display:none!important}body.performance-mode[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%]:hover, body.performance-mode[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:hover, body.performance-mode[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%]:hover, body.performance-mode[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]:hover, body.performance-mode[_ngcontent-%COMP%]   .mat-mdc-tab-header[_ngcontent-%COMP%]:hover, body.performance-mode[_ngcontent-%COMP%]   .mat-mdc-button[_ngcontent-%COMP%]:hover, body.performance-mode[_ngcontent-%COMP%]   .mat-mdc-button-toggle-group[_ngcontent-%COMP%]:hover, body.performance-mode[_ngcontent-%COMP%]   .skill-chip[_ngcontent-%COMP%]:hover, body.performance-mode[_ngcontent-%COMP%]   .icon-glass[_ngcontent-%COMP%]:hover, body.performance-mode[_ngcontent-%COMP%]   .glass-dialog-wrapper[_ngcontent-%COMP%]:hover, body.performance-mode[_ngcontent-%COMP%]   .mat-mdc-snack-bar-container[_ngcontent-%COMP%]:hover{transform:none!important;background:var(--table-header-bg)!important}body.performance-mode[_ngcontent-%COMP%]   .glass-dialog-backdrop[_ngcontent-%COMP%]{background:#000000d9!important;border:none!important}.performance-toggle[_ngcontent-%COMP%]{margin-right:0}app-root[_ngcontent-%COMP%]{position:relative;z-index:1}@supports (transform: translateZ(0)){.hero-card[_ngcontent-%COMP%], .timeline-card[_ngcontent-%COMP%], .projects-card[_ngcontent-%COMP%]{transform:translateZ(0);will-change:transform,opacity;backface-visibility:hidden;perspective:1000px}}@media(max-width:768px){.hide-mobile[_ngcontent-%COMP%]{display:none!important}}@media(min-width:769px){.hide-desktop[_ngcontent-%COMP%]{display:none!important}}.mt-0[_ngcontent-%COMP%]{margin-top:0!important}.mt-1[_ngcontent-%COMP%]{margin-top:.25rem!important}.mt-2[_ngcontent-%COMP%]{margin-top:.5rem!important}.mt-3[_ngcontent-%COMP%]{margin-top:1rem!important}.mt-4[_ngcontent-%COMP%]{margin-top:1.5rem!important}.mt-5[_ngcontent-%COMP%]{margin-top:2rem!important}.mb-0[_ngcontent-%COMP%]{margin-bottom:0!important}.mb-1[_ngcontent-%COMP%]{margin-bottom:.25rem!important}.mb-2[_ngcontent-%COMP%]{margin-bottom:.5rem!important}.mb-3[_ngcontent-%COMP%]{margin-bottom:1rem!important}.mb-4[_ngcontent-%COMP%]{margin-bottom:1.5rem!important}.mb-5[_ngcontent-%COMP%]{margin-bottom:2rem!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.d-none[_ngcontent-%COMP%]{display:none!important}.d-block[_ngcontent-%COMP%]{display:block!important}.d-flex[_ngcontent-%COMP%]{display:flex!important}.d-inline[_ngcontent-%COMP%]{display:inline!important}.d-inline-block[_ngcontent-%COMP%]{display:inline-block!important}.flex-center[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.flex-between[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.flex-column[_ngcontent-%COMP%]{display:flex;flex-direction:column}.position-relative[_ngcontent-%COMP%]{position:relative!important}.position-absolute[_ngcontent-%COMP%]{position:absolute!important}.position-fixed[_ngcontent-%COMP%]{position:fixed!important}.position-sticky[_ngcontent-%COMP%]{position:sticky!important}.overflow-hidden[_ngcontent-%COMP%]{overflow:hidden!important}.overflow-auto[_ngcontent-%COMP%]{overflow:auto!important}.overflow-scroll[_ngcontent-%COMP%]{overflow:scroll!important}@media(max-width:768px){.projects-section[_ngcontent-%COMP%]{padding:.5rem}}.projects-section.fullscreen[_ngcontent-%COMP%]{padding:0;position:fixed;inset:0;width:100dvw;height:100dvh;z-index:1000;background:transparent;margin:0}.projects-card[_ngcontent-%COMP%]{width:100%;max-width:1200px;height:90vh;height:92dvh;display:flex;padding:0!important;flex-direction:column;transition:width,height,max-width,border-radius .3s ease-in-out}.projects-card.fullscreen-card[_ngcontent-%COMP%]{max-width:100%;width:100%;height:100dvh;border-radius:0;border:none}.projects-card.fullscreen-card[_ngcontent-%COMP%]:before, .projects-card.fullscreen-card[_ngcontent-%COMP%]:after{border-radius:0}.projects-card[_ngcontent-%COMP%] > .main-header[_ngcontent-%COMP%]{flex-shrink:0;border-bottom:1px solid var(--glass-border);padding-left:.25rem;padding-right:.25rem}.projects-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{flex:1;overflow:hidden;padding:0}.main-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.25rem;width:100%;min-height:var(--layout-pane-header-height)}.main-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]:has(.back-button){gap:.5rem}.main-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]:has(.back-button)   .header-text[_ngcontent-%COMP%]{padding-left:0}.main-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]{transition:background-color .3s ease-in-out}.main-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]:hover{background-color:var(--glass-inset)}.main-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]{flex:1;min-width:0}.main-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-title-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.25rem}.main-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-title-wrapper[_ngcontent-%COMP%]   .help-action-btn[_ngcontent-%COMP%]{width:var(--layout-icon-xl);height:var(--layout-icon-xl);padding:0;color:var(--text-secondary);transition:color .3s ease-in-out}.main-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-title-wrapper[_ngcontent-%COMP%]   .help-action-btn[_ngcontent-%COMP%]:hover{color:var(--primary)}.main-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-title-wrapper[_ngcontent-%COMP%]   .help-action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:var(--layout-icon-md);width:var(--layout-icon-md);height:var(--layout-icon-md)}.main-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600;line-height:1.2;letter-spacing:0;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media(max-width:768px){.main-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:1.125rem;font-weight:600;line-height:1.2;letter-spacing:0}}.main-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{font-size:.875rem;font-weight:400;line-height:1.6;letter-spacing:0;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.main-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]:empty{display:none}.desktop-only[_ngcontent-%COMP%]{display:inline-flex!important;visibility:visible!important}@media(max-width:768px){.desktop-only[_ngcontent-%COMP%]{display:none!important;visibility:hidden!important}}.mobile-only[_ngcontent-%COMP%], .view-menu-btn.mobile-only[_ngcontent-%COMP%]{display:none!important;visibility:hidden!important}@media(max-width:768px){.mobile-only[_ngcontent-%COMP%], .view-menu-btn.mobile-only[_ngcontent-%COMP%]{display:inline-flex!important;visibility:visible!important}}.view-toggle[_ngcontent-%COMP%]{flex-shrink:0;margin-right:0}.view-toggle[_ngcontent-%COMP%]   .mat-mdc-button-toggle[_ngcontent-%COMP%]{padding-left:.25rem;padding-right:.25rem;min-width:auto}.back-button[_ngcontent-%COMP%]{flex-shrink:0;padding:0!important}.back-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--text-primary)}.content-container[_ngcontent-%COMP%]{height:100%;position:relative}.projects-dashboard[_ngcontent-%COMP%]{height:100%;overflow-y:auto;padding:1rem}.projects-dashboard[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px;height:8px}.projects-dashboard[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:var(--scrollbar-track);border-radius:4px}.projects-dashboard[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb);border-radius:4px}.projects-dashboard[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:var(--scrollbar-thumb-hover)}.projects-dashboard[_ngcontent-%COMP%]{scrollbar-width:thin;scrollbar-color:var(--scrollbar-thumb) var(--scrollbar-track)}@media(max-width:768px){.projects-dashboard[_ngcontent-%COMP%]{padding:.5rem}}.projects-grid[_ngcontent-%COMP%]{display:block;column-count:3;column-gap:var(--spacing-lg)}@media(max-width:1100px){.projects-grid[_ngcontent-%COMP%]{column-count:2}}@media(max-width:768px){.projects-grid[_ngcontent-%COMP%]{column-count:1}}.project-card[_ngcontent-%COMP%]{cursor:pointer;transition:transform,box-shadow .3s ease-in-out;height:auto;border-bottom:1px solid var(--glass-border);display:inline-block;width:100%;break-inside:avoid;margin-bottom:1.5rem}.project-card[_ngcontent-%COMP%]:hover{transition:transform .3s ease-in-out}.project-card[_ngcontent-%COMP%] > mat-card-header[_ngcontent-%COMP%]{margin:0;padding-left:1rem;padding-right:1rem;display:flex;align-items:center;border-bottom:1px solid var(--glass-border)}@media(max-width:768px){.project-card[_ngcontent-%COMP%] > mat-card-header[_ngcontent-%COMP%]{padding-left:.5rem;padding-right:.5rem}}.project-card[_ngcontent-%COMP%] > mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600;line-height:1.6;letter-spacing:0;margin:0;padding-top:1rem;padding-bottom:1rem}@media(max-width:768px){.project-card[_ngcontent-%COMP%] > mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:1.125rem;font-weight:600;line-height:1.6;letter-spacing:0}}.project-card[_ngcontent-%COMP%] > mat-card-header[_ngcontent-%COMP%]   .project-launch-btn[_ngcontent-%COMP%]{margin-left:auto;border-radius:.5rem;background:var(--glass-inset);width:var(--layout-icon-xl)!important;height:var(--layout-icon-xl)!important;padding:.25rem}.project-card[_ngcontent-%COMP%] > mat-card-header[_ngcontent-%COMP%]   .project-launch-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{transition:transform .3s ease-in-out;font-size:var(--layout-icon-lg)!important;width:var(--layout-icon-lg)!important;height:var(--layout-icon-lg)!important}.project-card[_ngcontent-%COMP%] > mat-card-header[_ngcontent-%COMP%]   .project-launch-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{transform:scale(1.1)}.project-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:1rem}@media(max-width:768px){.project-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:.5rem}}.project-icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:var(--layout-icon-xl);height:var(--layout-icon-xl)}.project-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--icon-color, var(--primary));font-size:var(--layout-icon-lg);width:var(--layout-icon-lg);height:var(--layout-icon-lg)}.project-description[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;line-height:1.6;letter-spacing:0;color:var(--text-secondary);margin-bottom:1rem}.project-technologies[_ngcontent-%COMP%]   mat-chip-set[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem}.project-content[_ngcontent-%COMP%]{height:100%;overflow-y:auto}.project-content[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px;height:8px}.project-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:var(--scrollbar-track);border-radius:4px}.project-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb);border-radius:4px}.project-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:var(--scrollbar-thumb-hover)}.project-content[_ngcontent-%COMP%]{scrollbar-width:thin;scrollbar-color:var(--scrollbar-thumb) var(--scrollbar-track)}@media(max-width:768px){.project-content[_ngcontent-%COMP%]{padding:0}}@media(max-width:768px){.hide-on-mobile-search[_ngcontent-%COMP%]{display:none!important}}.header-search[_ngcontent-%COMP%]{display:flex;align-items:center;border-radius:1rem;transition:all .3s ease-in-out;margin-left:auto;background:transparent}.header-search.active[_ngcontent-%COMP%]{background:var(--bg-overlay);border:1px solid var(--glass-border);padding-left:.5rem;box-shadow:var(--glass-shadow)}@media(max-width:768px){.header-search.active[_ngcontent-%COMP%]{width:100%;justify-content:space-between}}.header-search[_ngcontent-%COMP%]   .glass-search-input[_ngcontent-%COMP%]{border:none;background:transparent;color:var(--text-primary);outline:none;width:var(--layout-search-min-width);font-size:1rem;font-weight:400;line-height:1.6;letter-spacing:0}.header-search[_ngcontent-%COMP%]   .glass-search-input[_ngcontent-%COMP%]::placeholder{color:var(--text-secondary);opacity:.7}@media(max-width:768px){.header-search[_ngcontent-%COMP%]   .glass-search-input[_ngcontent-%COMP%]{width:100%;flex:1}}.header-search[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]{flex-shrink:0}`]})};export{vt as ProjectLabComponent};
