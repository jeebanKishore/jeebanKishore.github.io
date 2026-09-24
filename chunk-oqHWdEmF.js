import {t}from'./chunk-CNB7530W.js';import {T,Q,W,g as g0,h,v,n as ne,a as ge,u as uw,y as yn,f as f0,H as Hn,w as wl,X as Xt,F,b as vE,x as xi,c as yt,N as Ni,d as xn,e as br,z,i as F$1,k,j as T$1,l as j,m as ci,o as ui,M as Mh,p as Th,$ as $s,q as ct$1,r as ki,s as at$1,L as Lt,P,G,t as Nt,A as F$2,O as Ot,B as bt,C as nt$1,_ as _n,D as Mi,E as f,I as u,J as s,K as mi,R as $E,S as FD,U as Hc,V as Wp,Y as gD,Z as th,a0 as Vv,a1 as UE,a2 as ch,a3 as jp,a4 as Kp,a5 as hD,a6 as XE,a7 as Su,a8 as aD,a9 as Nu,aa as jc,ab as Vp,ac as GE,ad as qE,ae as zE,af as NI,ag as AI,ah as XD,ai as WE,aj as nw,ak as Wc,al as zy}from'./main-YSCUGSSG.js';var Ee=`
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
`,je=`
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
`,Le=`
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
`,Fe=`
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
`,ze=`
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
`,Ge=`
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
`,Ue=`
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
`,Ne=`
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
`,Be=`
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
`,We=`
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
`,He=`
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
`,Ve=`
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
`,qe=`
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
`,Ye=`
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
`,Qe=`
<div class="help-content-container flex-column" style="gap: 2rem;">
  
  <div class="user-guide-section">
    <h2 class="section-title">\u{1F3A8} Comprehensive Halftone User Guide</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      The Halftone Engine is a highly advanced vector generator that translates continuous-tone images (like photographs) into scalable, discrete geometric grids. Due to the vast number of mathematical permutations, understanding the control surface is key to generating stunning optical illusions, print-ready graphics, and abstract vector art.
    </p>

    <div class="flex-column" style="gap: 1.5rem;">
      
      <div class="guide-step">
        <h3 class="subsection-title">1. Presets & Source Image \u{1F4BE}</h3>
        <p class="body-text">
          Before tweaking parameters, you must provide the engine with a data source.
        </p>
        <ul class="body-text" style="padding-left: 1.5rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
          <li><strong>Upload Image:</strong> Selects the base image. The engine extracts the raw RGB and Alpha pixel data from this image to drive the dot sizing and color algorithms.</li>
          <li><strong>Load Preset:</strong> Instantly applies saved mathematical configurations. The visual icon next to each preset actively renders a preview of its specific shape, color, and stroke settings.</li>
          <li><strong>Save / Delete:</strong> Custom configurations are saved persistently in your browser's IndexedDB. Enter a name and click Save to store your current matrix.</li>
        </ul>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">2. Grid Pattern & Matrix \u{1F4D0}</h3>
        <p class="body-text">
          This section dictates the invisible mathematical grid upon which shapes are drawn.
        </p>
        
        <ul class="body-text" style="padding-left: 1.5rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
          <li><strong>Pattern Types (Icons):</strong> Defines the layout algorithm. 
            <em>Regular</em> is a standard square matrix. 
            <em>Checkers & Hex</em> stagger the rows for denser packing. 
            <em>Radial</em> spins the grid out from a central point. 
            <em>Wave & Zigzag</em> warp the Y-axis using sine waves and absolute wave functions.
            <em>Random</em> applies noise to the coordinates.</li>
          <li><strong>Vertical Elements:</strong> The core density control. Defines exactly how many rows of dots fit top-to-bottom. Higher numbers = finer detail but massively increased rendering load.</li>
          <li><strong>Horizontal Spread:</strong> A percentage scale (Default: 100). Lowering this compresses the grid horizontally without affecting vertical spacing, allowing you to force shapes to overlap.</li>
          <li><strong>Grid Rotation:</strong> Rotates the entire invisible mathematical plane (-180\xB0 to 180\xB0). Crucial for multi-pass CMYK print separations to avoid moir\xE9 patterns.</li>
          <li><strong>Offset X / Y:</strong> Shifts the grid origin. Useful for perfectly centering a pattern over specific features of your image.</li>
          <li><strong>Center X / Y:</strong> Only visible in Radial mode. Moves the origin point of the circular grid anywhere on (or off) the canvas.</li>
          <li><strong>Wave Frequency:</strong> Only visible in Wave/Zigzag modes. Determines how many "peaks and valleys" occur across the width of the image.</li>
        </ul>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">3. Shape Palette \u{1F53A}</h3>
        <p class="body-text">
          Determines the physical geometry stamped at each calculated grid coordinate.
        </p>
        <ul class="body-text" style="padding-left: 1.5rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
          <li><strong>Built-in Shapes:</strong> Highly optimized primitives. When selected, the engine combines thousands of them into a single SVG <code>&lt;path&gt;</code> string for maximum performance.</li>
          <li><strong>Text Character:</strong> When the "A" icon is selected, a text input appears. You can type any character (e.g., #, \u2605, @). The engine will use standard font rendering to stamp this character across the grid.</li>
          <li><strong>Import SVG Shape:</strong> Allows you to upload your own custom vector files. The engine parses your SVG, strips hardcoded dimensions, establishes a scalable <code>viewBox</code>, and stamps it across the grid using highly efficient <code>&lt;use&gt;</code> tags. If your custom SVG is a single color, it will dynamically inherit the image's colors!</li>
        </ul>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">4. Dots & Size Mapping \u{1F39B}\uFE0F</h3>
        <p class="body-text">
          This is the heart of the engine. It dictates <em>how</em> the shapes scale up and down.
        </p>
        <ul class="body-text" style="padding-left: 1.5rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
          <li><strong>Size By (Gradient):</strong> The data source mapped to dot size. 
            <br>\u2022 <em>Image / Image Inverted:</em> Darker (or lighter) pixels in your source photo make the dots larger. 
            <br>\u2022 <em>Image Alpha:</em> Transparent areas shrink the dots. 
            <br>\u2022 <em>Linear / Round:</em> Ignores the image entirely and sizes dots based purely on their geometric position on the canvas.</li>
          <li><strong>Contrast:</strong> Applies an exponential mathematical curve to the size mapping. High contrast crushes mid-tones, forcing dots to snap to either their Minimum or Maximum size.</li>
          <li><strong>Maximum / Minimum Size:</strong> Defines the absolute scale limits of the shapes. At Max Size 100, the shape perfectly touches its neighbors. Pushing it to 200 forces heavy overlapping.</li>
          <li><strong>Element Rotation:</strong> Rotates the individual shapes on their own centers (e.g., turning a Square into a Diamond). Does not affect the grid itself.</li>
          <li><strong>Random / Alternating Rotation:</strong> Overrides static rotation. Alternating spins every other row by 180\xB0, which is essential for creating interlocking tessellations with the Triangle shape.</li>
        </ul>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">5. Colors & Style \u{1F3A8}</h3>
        <p class="body-text">
          Controls the final stroke and fill painting applied to the output vectors.
        </p>
        <ul class="body-text" style="padding-left: 1.5rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
          <li><strong>Use Image Color:</strong> When checked, the engine samples the exact RGB pixel beneath each grid coordinate and paints the shape that color. When unchecked, it uses the global Foreground Color.</li>
          <li><strong>Draw Background:</strong> Toggles a solid bounding rectangle behind the pattern. Uncheck this if you want an SVG with a transparent background.</li>
          <li><strong>Filled Shape:</strong> When checked, shapes are painted solidly. When unchecked, shapes are drawn as wireframe outlines.</li>
          <li><strong>Stroke Width:</strong> Only visible when "Filled Shape" is unchecked. Controls the thickness of the vector outlines.</li>
        </ul>
      </div>

    </div>
  </div>

  <hr style="border-color: var(--glass-border); margin: 2rem 0;">

  <div class="engineering-section">
    <h2 class="section-title">\u2699\uFE0F Engineering Deep Dive</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      Generating massive vector grids in the browser is notoriously difficult. A high-density grid can require over 250,000 distinct geometric calculations per frame. Doing this in standard JavaScript causes severe Garbage Collection (GC) thrashing and freezes the main thread.
    </p>
    
    

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="engineering-card">
        <h3 class="subsection-title">1. Rust Wasm Flat-Buffer Bridge \u{1F980}</h3>
        <p class="body-text">
          Instead of relying on JavaScript's V8 engine for heavy trigonometry, the grid matrix math is compiled into a <strong>Rust WebAssembly (Wasm)</strong> binary. 
          <br><br>
          To eliminate serialization bottlenecks across the Wasm bridge, the engine does <em>not</em> generate strings in Rust. Instead, Rust acts purely as a high-speed calculator. It computes the matrix and writes raw floating-point data <code>[X, Y, Size, Rotation, R, G, B]</code> directly into a pre-allocated Linear Memory buffer. The JavaScript Web Worker then reads this <code>Float32Array</code> instantly via a zero-copy memory view.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">2. Mathematical Bucket Optimization \u{1F4E6}</h3>
        <p class="body-text">
          Attempting to append 150,000 separate <code>&lt;circle&gt;</code> elements into the DOM will immediately crash most browsers. To solve this, the JavaScript worker optimizes the final markup using "Bucketing."
          <br><br>
          Standard shapes that share identical color and stroke properties are mathematically concatenated into a single, massive SVG <code>&lt;path d="..."&gt;</code> string. For custom imported SVGs, the engine caches the original geometry inside a <code>&lt;symbol&gt;</code> tag and leverages hardware-accelerated <code>&lt;use href="#id"&gt;</code> tags to stamp it across the canvas, reducing memory footprint by 99%.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">3. Signal-Driven Queueing \u{1F6A6}</h3>
        <p class="body-text">
          The interface uses <strong>Angular Signals</strong> to track the state of every slider and color picker without Change Detection lag. Because Wasm renders are so fast, dragging a slider could theoretically trigger hundreds of redundant generation requests per second.
          <br><br>
          The component implements an asynchronous debouncing queue inside an <code>effect()</code>. It intercepts rapid slider updates, registers only the latest state, and waits until the user ceases interaction (and the Web Worker confirms it is idle) before firing the matrix calculation, ensuring perfectly fluid 60fps UI performance.
        </p>
      </div>
    </div>
  </div>

</div>
`,Je=`
<div class="help-content-container flex-column" style="gap: 2rem;">
  
  <div class="user-guide-section">
    <h2 class="section-title">\u{1F3A8} Benchmark Color & Gradient Editor</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      A professional-grade, native Angular color selection tool. Built to mirror the UX of high-end design software like Figma, this editor floats above your workspace and supports complex multi-point gradients, opacity, and precise data entry.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="guide-step">
        <h3 class="subsection-title">1. The Floating Workspace \u{1F5B1}\uFE0F</h3>
        <p class="body-text">
          Grab the top header of the Color Editor to drag it anywhere on your screen. The live preview updates the entire background of the application instantly, giving you full-screen context of how your color choices feel at scale.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">2. Solid vs. Gradient Modes \u{1F313}</h3>
        <p class="body-text">
          Use the top toggle to switch between a standard solid color and a complex gradient. In Gradient mode, a multi-point slider track appears. <strong>Click anywhere on the empty track</strong> to add a new color stop. Click and drag the circular handles to adjust the color blending, or use the red trash icon to delete the active stop.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">3. Precision Tools & Eyedropper \u{1F489}</h3>
        <p class="body-text">
          Need to match a brand guideline? Type an exact Hex code into the input field (it fully supports 8-character Hex codes for opacity!). Alternatively, click the <strong>Eyedropper</strong> icon to sample any color directly from your screen\u2014even outside the browser window. You can also click the quick-swatches below to snap to predefined brand colors.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">4. Gradient Formatting \u{1F4D0}</h3>
        <p class="body-text">
          When in gradient mode, use the alignment tools to switch between <strong>Linear</strong> and <strong>Radial</strong> gradients. For linear gradients, simply type in a custom angle (0-360\xB0) to rotate the color flow exactly how you want it.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">5. Export to CSS \u{1F4CB}</h3>
        <p class="body-text">
          Once your gradient or solid color is perfect, click the "Copy CSS" button in the center of the screen. The exact <code>rgba()</code> or <code>linear-gradient()</code> CSS string is immediately copied to your clipboard.
        </p>
      </div>
    </div>
  </div>

  <hr style="border: none; border-top: 1px solid var(--glass-border); margin: 0;">

  <div class="engineering-section">
    <h2 class="section-title">\u2699\uFE0F Architecture & Engineering</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      This component is a masterclass in modernizing legacy tech. It completely eradicates heavy dependencies (jQuery and jQuery UI) in favor of a pristine, high-performance Angular architecture.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="engineering-card">
        <h3 class="subsection-title">jQuery Eradication & Signal State \u{1F6D1}</h3>
        <p class="body-text">
          The original implementation relied on querying the DOM (reading <code>data-percent</code> attributes off HTML elements) to calculate gradients. This Angular rewrite abolishes DOM-reading entirely. It uses a strict, unidirectional <strong>Signal-based data model</strong>. The UI is merely a reflection of the <code>currentHsb()</code> and <code>gradientStops()</code> arrays, resulting in zero-latency updates.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Universal Drag Directive \u{1F9F2}</h3>
        <p class="body-text">
          Replacing jQuery UI's draggable physics required building a custom <code>@HostListener</code> directive. To prevent erratic jumping when clicking slider handles, the directive accepts a parent <code>[appDragContainer]</code>. It mathematically binds the mouse/touch <code>clientX</code> and <code>clientY</code> coordinates to the exact bounding rectangle of the track, ensuring flawless 0-100% percentage emissions.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Form Integration & ControlValueAccessor \u{1F50C}</h3>
        <p class="body-text">
          Despite its complexity, the entire editor acts as a standard HTML input. By implementing Angular's <code>ControlValueAccessor</code>, the component seamlessly integrates with Reactive Forms or two-way <code>[(ngModel)]</code> binding. It parses incoming CSS strings back into state, and emits perfectly formatted CSS outwards.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Pure Math Color Utilities \u{1F9EE}</h3>
        <p class="body-text">
          Rather than importing bulky color-manipulation libraries, the app utilizes a custom <code>ColorUtils</code> class. It performs complex algebraic conversions between Hex, RGB, and HSB (Hue, Saturation, Brightness) natively. It even reverse-engineers 8-character Hex codes into precise floating-point Alpha channels.
        </p>
      </div>
    </div>
  </div>

</div>
`,Ke=`
<div class="help-content-container flex-column" style="gap: 2rem;">
  
  <div class="user-guide-section">
    <h2 class="section-title">\u2696\uFE0F High-Performance JSON Compare</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      An enterprise-grade, dual-pane diffing tool built to analyze massive JSON payloads. Identify additions, deletions, and modifications across huge datasets with zero browser lag.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="guide-step">
        <h3 class="subsection-title">1. Load Your Datasets \u{1F4E5}</h3>
        <p class="body-text">
          Upload or paste your "Original" and "Modified" JSON payloads into the configuration panels. Click the <strong>Compare JSON</strong> button to initiate the diffing engine.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">2. Synchronized Split-View \u{1F441}\uFE0F</h3>
        <p class="body-text">
          Scroll through either the left or right pane. The tool perfectly synchronizes the scroll position of both viewports, ensuring the original and modified nodes remain flawlessly aligned horizontally, just like professional Git diff tools.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">3. Analyze the Diff \u{1F3A8}</h3>
        <p class="body-text">
          The tool utilizes standard GitHub-style color coding to highlight changes:
        </p>
        <ul class="body-text" style="padding-left: 1.5rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
          <li><strong style="color: var(--success);">Green (Added):</strong> Keys or values that exist only in the Modified JSON.</li>
          <li><strong style="color: var(--error);">Red (Removed):</strong> Keys or values that were deleted from the Original JSON.</li>
          <li><strong style="color: var(--warning);">Yellow (Modified):</strong> Keys where the data type or value changed between versions.</li>
        </ul>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">4. Collapse and Expand \u{1F333}</h3>
        <p class="body-text">
          Click the <code>+</code> or <code>-</code> toggles to expand or collapse nested objects and arrays. Because both panes are bound to the same state engine, expanding a node on the left automatically expands its counterpart on the right to maintain visual symmetry.
        </p>
      </div>
    </div>
  </div>

  <hr style="border: none; border-top: 1px solid var(--glass-border); margin: 0;">

  <div class="engineering-section">
    <h2 class="section-title">\u2699\uFE0F Architecture & Engineering</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      Rendering two synchronized, 50,000-node trees side-by-side requires bypassing the standard DOM entirely. This tool leverages Virtual Scrolling, Web Workers, and clever spacer algorithms.
    </p>
    

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="engineering-card">
        <h3 class="subsection-title">Simultaneous O(N) Traversal \u{1F9EE}</h3>
        <p class="body-text">
          Instead of rendering two separate trees and attempting to diff them in the UI, a dedicated Web Worker (<code>json-diff.worker.ts</code>) walks both the Original and Modified JSON objects simultaneously. It recursively compares node types and values in a single pass, flattening the multi-dimensional objects into two linear 1D arrays to prevent main-thread freezing.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Dummy Node Injection \u{1F489}</h3>
        <p class="body-text">
          To maintain perfect horizontal alignment in a split view, both arrays must be the exact same length. When the algorithm detects that a key was added to the right side, it intentionally pushes a blank "Dummy Node" into the left array. The UI renders this dummy node as an empty, striped spacer, ensuring all subsequent nodes stay locked in vertical sync.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Dual Virtual Viewports \u{1F3CE}\uFE0F</h3>
        <p class="body-text">
          The UI utilizes two side-by-side Angular <code>CdkVirtualScrollViewport</code> components. Even if the diff generates 100,000 nodes, the DOM only ever renders the ~40 nodes currently visible on your screen. The components recycle DOM elements as you scroll, keeping memory consumption near zero.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Cross-Viewport Scroll Synchronization \u{1F504}</h3>
        <p class="body-text">
          Keeping two independent virtual scrollers aligned requires strict event management. The component binds to the native <code>(scroll)</code> events of both viewports. When the left pane scrolls, it programmatically updates the <code>scrollTop</code> of the right pane (and vice versa). To prevent an infinite event-triggering loop, a boolean locking mechanism (<code>isSyncingLeft</code> / <code>isSyncingRight</code>) intercepts and nullifies the echo events.
        </p>
      </div>
    </div>
  </div>

</div>
`,Xe=`
<div class="help-content-container flex-column" style="gap: 2rem;">
  
  <div class="user-guide-section">
    <h2 class="section-title">\u{1F4D6} How to Use</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      This tool removes all whitespace characters from your text, including spaces, tabs, newlines, and carriage returns. Perfect for creating compact strings or removing formatting.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="guide-step">
        <h3 class="subsection-title">1. Input Your Text \u{1F4E5}</h3>
        <p class="body-text">
          Choose one of two methods:
        </p>
        <ul class="body-text" style="margin-left: 1.5rem;">
          <li><strong>Upload a text file:</strong> Click the upload area and select a .txt file (max 5MB)</li>
          <li><strong>Paste directly:</strong> Type or paste your text into the large textarea</li>
        </ul>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">2. Remove Whitespace \u{1F9F9}</h3>
        <p class="body-text">
          Click the <strong>"Remove All Whitespace"</strong> button. The tool will:
        </p>
        <ul class="body-text" style="margin-left: 1.5rem;">
          <li>Strip all spaces, tabs, newlines, and other whitespace characters</li>
          <li>Display statistics showing original length, processed length, and reduction percentage</li>
          <li>Show the cleaned result in a readonly textarea</li>
        </ul>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">3. Copy Result \u{1F4CB}</h3>
        <p class="body-text">
          Click the <strong>"Copy to Clipboard"</strong> button to copy the processed text. You'll see a confirmation notification when the copy is successful.
        </p>
      </div>
    </div>
  </div>

  <hr style="border: none; border-top: 1px solid var(--glass-border); margin: 0;">

  <div class="engineering-section">
    <h2 class="section-title">\u2699\uFE0F Technical Details</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      Built with Angular 21 using modern web APIs and reactive state management.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="engineering-card">
        <h3 class="subsection-title">Signal-Based State \u{1F3AF}</h3>
        <p class="body-text">
          Uses Angular Signals for reactive state management with OnPush change detection, ensuring optimal performance and automatic UI updates.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Whitespace Removal Algorithm \u{1F527}</h3>
        <p class="body-text">
          Uses the regular expression <code>/\\s+/g</code> to match and remove all Unicode whitespace characters, including:
        </p>
        <ul class="body-text" style="margin-left: 1.5rem;">
          <li>Spaces (U+0020)</li>
          <li>Tabs (U+0009)</li>
          <li>Newlines (U+000A)</li>
          <li>Carriage returns (U+000D)</li>
          <li>Other Unicode whitespace characters</li>
        </ul>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Clipboard API Integration \u{1F4CB}</h3>
        <p class="body-text">
          Uses the modern <code>navigator.clipboard.writeText()</code> API for secure, asynchronous clipboard operations with proper error handling and user feedback.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">File Upload Support \u{1F4C1}</h3>
        <p class="body-text">
          Accepts text files (.txt) up to 5MB using the FileReader API. Files are read as UTF-8 text and processed client-side for privacy.
        </p>
      </div>
    </div>
  </div>

</div>
`,Ze=`
<div class="help-content-container flex-column" style="gap: 2rem;">
  
  <div class="user-guide-section">
    <h2 class="section-title">\u{1F3A5} How to Use Screen Recorder</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      A professional screen recording tool with advanced features including audio mixing, pause/resume, real-time annotations, and timeline editing.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="guide-step">
        <h3 class="subsection-title">1. Configure Recording Settings \u2699\uFE0F</h3>
        <p class="body-text">
          Before starting, choose your audio sources:
        </p>
        <ul class="body-text" style="margin-left: 1.5rem;">
          <li><strong>System Audio:</strong> Captures audio from your computer (browser tabs, applications, etc.)</li>
          <li><strong>Microphone:</strong> Records your voice through your microphone</li>
          <li>Both options can be enabled simultaneously for mixed audio recording</li>
        </ul>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">2. Start Recording \u{1F3AC}</h3>
        <p class="body-text">
          Click <strong>"Start Recording"</strong> and select the screen, window, or browser tab you want to record. The browser will prompt you to choose your recording source. Once selected, recording begins immediately with a live timer display.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">3. Pause & Resume \u23EF\uFE0F</h3>
        <p class="body-text">
          During recording, use the <strong>Pause</strong> button to temporarily stop recording without ending the session. Click <strong>Resume</strong> to continue from where you left off. The timer pauses during breaks.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">4. Stop & Preview \u{1F6D1}</h3>
        <p class="body-text">
          Click <strong>"Stop Recording"</strong> to end the session. Your recording will appear in the preview player below with full playback controls. The summary bar displays file size, duration, and format information.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">5. Add Annotations \u270F\uFE0F</h3>
        <p class="body-text">
          After recording, click the <strong>"Draw"</strong> button to enable annotation mode. Draw directly on the video preview using your mouse. Change the brush color using the color picker, and clear all annotations with the <strong>"Clear Annotations"</strong> button.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">6. Trim Timeline \u2702\uFE0F</h3>
        <p class="body-text">
          Use the dual sliders to set precise start and end points for your recording. The formatted timestamps show exactly where your trim points are positioned. This is useful for removing unwanted sections from the beginning or end.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">7. Export Recording \u{1F4BE}</h3>
        <p class="body-text">
          Click <strong>"Save Original (WebM)"</strong> to download your recording immediately. The <strong>"Render Edited Video"</strong> option will be available in future updates for exporting trimmed/annotated versions.
        </p>
      </div>
    </div>
  </div>

  <hr style="border: none; border-top: 1px solid var(--glass-border); margin: 0;">

  <div class="engineering-section">
    <h2 class="section-title">\u2699\uFE0F Technical Implementation</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      Built with Angular 21 and modern browser APIs for professional-grade screen recording capabilities.
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="engineering-card">
        <h3 class="subsection-title">Screen Capture API \u{1F4FA}</h3>
        <p class="body-text">
          Uses the native <code>navigator.mediaDevices.getDisplayMedia()</code> API to capture screen content at 30 FPS. This provides access to entire screens, specific windows, or individual browser tabs with hardware-accelerated encoding.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">MediaRecorder API \u{1F399}\uFE0F</h3>
        <p class="body-text">
          Leverages the <code>MediaRecorder</code> API with VP9 codec support for efficient video compression. Automatically falls back to standard WebM encoding if VP9 is unavailable, ensuring broad browser compatibility.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Audio Mixing Architecture \u{1F39A}\uFE0F</h3>
        <p class="body-text">
          Implements the Web Audio API to create a sophisticated audio mixing pipeline. System audio and microphone streams are routed through an <code>AudioContext</code> with a <code>MediaStreamAudioDestinationNode</code>, allowing simultaneous capture of multiple audio sources into a single mixed track.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Canvas 2D Annotations \u{1F3A8}</h3>
        <p class="body-text">
          Overlays a transparent HTML5 Canvas element on top of the video preview. Mouse events are captured and scaled to match the video's native resolution, ensuring annotations remain accurate regardless of display size. Drawing history is stored for potential future re-rendering.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Signal-Based Reactive State \u{1F3AF}</h3>
        <p class="body-text">
          All component state (recording status, timer, settings, trim points) is managed using Angular Signals with OnPush change detection. This ensures optimal performance and automatic UI updates without manual change detection cycles.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Memory Management \u{1F9F9}</h3>
        <p class="body-text">
          Implements proper cleanup with <code>ngOnDestroy</code> lifecycle hook. Stops all media tracks, closes audio contexts, revokes object URLs, and clears timers to prevent memory leaks during component destruction.
        </p>
      </div>
    </div>
  </div>

</div>
`,$e=`
<div class="help-content-container flex-column" style="gap: 2rem;">
  
  <div class="user-guide-section">
    <h2 class="section-title">\u{1F3A8} How to Use WordArt Studio</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      Create stunning typographic word clouds shaped into silhouettes, custom logos, and geometric patterns directly in your browser. Follow these steps to produce publication-ready artwork:
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="guide-step">
        <h3 class="subsection-title">1. Curate Your Word List \u{1F4DD}</h3>
        <p class="body-text">
          Enter words manually, paste entire articles to auto-extract frequent terms with stop-word removal, or import existing lists. Assign <strong>Weights</strong> (1\u2013100) to control relative word prominence. You can also assign individual colors, specific fonts, angles, or hyperlinks to each word.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">2. Choose or Upload a Shape \u{1F5BC}\uFE0F</h3>
        <p class="body-text">
          Select from hundreds of curated silhouettes across Animals, Geometry, Holidays, Nature, and Symbols, or choose the freeform <strong>Wordle Cloud</strong>. Want to use your own logo or photo? Click <strong>Add Shape</strong>: upload any image, fine-tune the luminance threshold, apply edge carving, or toggle negative inversion.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">3. Customize Fonts & Layout Angles \u{1F4D0}</h3>
        <p class="body-text">
          Browse modern web and display fonts\u2014including multi-color OpenType fonts (COLR/CPAL). In the <strong>Layout</strong> tab, pick orientation presets such as Horizontal, Vertical, Crossing, Diagonal (+/- 45\xB0), or Random Angles to match your aesthetic.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">4. Dial in Density & Placement \u2699\uFE0F</h3>
        <p class="body-text">
          Under the <strong>Style</strong> panel, adjust word density, maximum word scale, and repetition behavior. Choose between <em>Fit to Shape</em> (packs words until the silhouette is dense) or <em>Target Count</em> (places an exact number of words).
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">5. Interactive Fine-Tuning \u{1F590}\uFE0F</h3>
        <p class="body-text">
          Once generated, the canvas is fully interactive! Click any word to drag, resize, rotate, change its color, pin its position, or bend it along a circular arc. Pinned words stay locked in place even when re-generating remaining words.
        </p>
      </div>

      <div class="guide-step">
        <h3 class="subsection-title">6. Export High-Resolution Artwork \u{1F4BE}</h3>
        <p class="body-text">
          Download your creation in vector <strong>SVG</strong> (with crystal-clear path curves or selectable text), high-DPI raster <strong>PNG / JPEG</strong> (up to 4K/8K resolution for prints and posters), or save your project as a reusable <strong>JSON</strong> preset.
        </p>
      </div>
    </div>
  </div>

  <hr style="border: none; border-top: 1px solid var(--glass-border); margin: 0;">

  <div class="engineering-section">
    <h2 class="section-title">\u2699\uFE0F Engineering Behind the Scenes</h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      WordArt Studio runs 100% locally in the browser with zero server uploads. High computational throughput is achieved through a multi-threaded WebAssembly architecture:
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="engineering-card">
        <h3 class="subsection-title">Rust & WebAssembly Core \u{1F980}</h3>
        <p class="body-text">
          Word placement inside complex shapes requires scanning millions of pixels to find optimal bounding boxes. A compiled <strong>Rust WebAssembly (WASM)</strong> engine executes a branch-free 2D histogram monotonic stack algorithm (<code>find_max_empty_rectangle</code>) alongside 64-bit word-parallel bitwise collision routines (<code>PackedBitmap64</code>), speeding up placement by over <strong>15x\u201330x</strong> compared to pure JavaScript.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Dedicated Web Worker Execution \u{1F9F5}</h3>
        <p class="body-text">
          Heavy algorithmic workloads and WASM routines execute entirely off the main thread in a dedicated <strong>Web Worker</strong>. Canvas image data buffers are transferred via zero-copy <code>Transferable Objects</code>, ensuring the user interface remains completely smooth (locked 60\u2013120 FPS) with live streaming progress updates.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Computer Vision & Canny Edge Detection \u{1F441}\uFE0F</h3>
        <p class="body-text">
          When custom images are imported, our Rust image pipeline performs real-time Grayscale conversion, 5\xD75 Gaussian smoothing, and Canny hysteresis edge detection. This carves interior silhouette boundaries and computes tight opaque bounding boxes in under 15ms for 4-megapixel images.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">OpenType & Color Font Engine \u{1F524}</h3>
        <p class="body-text">
          Powered by a customized <code>fontkit</code> adapter, the engine parses TrueType/OpenType font binaries directly, extracting B\xE9zier curves, computing typographic metrics (x-height, ascenders), decomposing multi-layer color glyphs (COLR/CPAL), and calculating per-glyph affine transformation matrices for curved arc text bending.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title">Dual-Mode Graceful Fallback \u{1F6E1}\uFE0F</h3>
        <p class="body-text">
          The architecture implements a dual-mode engine: if WebAssembly is unavailable in legacy browser configurations, the pipeline seamlessly and transparently falls back to optimized TypeScript implementations without user interruption.
        </p>
      </div>
    </div>
  </div>

</div>
`,et=`
<div class="help-content-container flex-column" style="gap: 2rem;">

  <!-- Enterprise Header Overview -->
  <div class="user-guide-section">
    <div style="background: linear-gradient(135deg, rgba(11, 107, 95, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 12px); padding: 1.5rem; margin-bottom: 1.5rem;">
      <h2 class="section-title" style="color: var(--text-primary); margin-top: 0; display: flex; align-items: center; gap: 0.75rem;">
        <span class="material-icons" style="color: var(--primary); font-size: 28px; vertical-align: middle;">biotech</span> Pathology Report Generator & Lab Studio
      </h2>
      <p class="body-text" style="margin-bottom: 0.75rem; line-height: 1.6;">
        A high-velocity, clinical-grade diagnostic laboratory information and report generation system designed for standalone pathology centers, clinical diagnostic clinics, and hospital outpatient labs. Engineered with a <strong>100% client-side, local-first offline architecture</strong>, all patient health records, biochemical observations, and billing ledgers remain strictly on your device with zero cloud telemetry.
      </p>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;">
        <span style="background: var(--bg-overlay, rgba(255,255,255,0.1)); border: 1px solid var(--glass-border); border-radius: 6px; padding: 4px 10px; font-size: 12px; font-weight: 500; display: inline-flex; align-items: center; gap: 4px;">
          <span class="material-icons help-inline-icon" style="color: var(--primary);">bolt</span> Zero-Latency Offline DB
        </span>
        <span style="background: var(--bg-overlay, rgba(255,255,255,0.1)); border: 1px solid var(--glass-border); border-radius: 6px; padding: 4px 10px; font-size: 12px; font-weight: 500; display: inline-flex; align-items: center; gap: 4px;">
          <span class="material-icons help-inline-icon" style="color: #10b981;">lock</span> HIPAA / Clinical Privacy
        </span>
        <span style="background: var(--bg-overlay, rgba(255,255,255,0.1)); border: 1px solid var(--glass-border); border-radius: 6px; padding: 4px 10px; font-size: 12px; font-weight: 500; display: inline-flex; align-items: center; gap: 4px;">
          <span class="material-icons help-inline-icon" style="color: #3b82f6;">calculate</span> Auto Clinical Formulas
        </span>
        <span style="background: var(--bg-overlay, rgba(255,255,255,0.1)); border: 1px solid var(--glass-border); border-radius: 6px; padding: 4px 10px; font-size: 12px; font-weight: 500; display: inline-flex; align-items: center; gap: 4px;">
          <span class="material-icons help-inline-icon" style="color: #8b5cf6;">print</span> Pre-Printed Stationery Calibrated
        </span>
        <span style="background: var(--bg-overlay, rgba(255,255,255,0.1)); border: 1px solid var(--glass-border); border-radius: 6px; padding: 4px 10px; font-size: 12px; font-weight: 500; display: inline-flex; align-items: center; gap: 4px;">
          <span class="material-icons help-inline-icon" style="color: #06b6d4;">qr_code_2</span> Dynamic UPI QR Billing
        </span>
      </div>
    </div>

    <!-- Complete Workflows Step-by-Step -->
    <h2 class="section-title" style="display: flex; align-items: center; gap: 0.5rem;">
      <span class="material-icons" style="font-size: 24px; color: var(--primary);">assignment</span> Comprehensive Clinical Workflows
    </h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      Follow these detailed step-by-step guides to master each clinical and administrative workflow in Pathology Lab Studio:
    </p>

    <div class="flex-column" style="gap: 1.75rem;">

      <!-- ========================================== -->
      <!-- WORKFLOW 1: FIRST-TIME LAB SETUP & CONFIG  -->
      <!-- ========================================== -->
      <div class="guide-step" style="border-left: 3px solid #0b6b5f; padding-left: 1.25rem;">
        <h3 class="subsection-title" style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-primary);">
          <span class="material-icons" style="font-size: 22px; color: #0b6b5f;">tune</span> 1. First-Time Laboratory Onboarding & Complete Lab Setup
        </h3>
        <p class="body-text">
          When launching Pathology Lab Studio for the first time on a new computer or clinic terminal, you must configure your laboratory's official branding, contact details, medical credentials, stationery calibration, and payment endpoints:
        </p>

        <div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Step 1: Open Laboratory Settings</strong>
            <p class="body-text" style="margin: 0;">
              Click the <span class="help-icon-chip"><span class="material-icons">tune</span> Settings</span> button in the top studio header bar. If the lab has never been set up, this icon displays a high-visibility amber warning badge to indicate configuration is pending.
            </p>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Step 2: Fill Laboratory Profile & Legal Details (Tab 1)</strong>
            <ul class="body-text" style="padding-left: 1.25rem; margin: 0; display: flex; flex-direction: column; gap: 0.35rem;">
              <li><strong>Laboratory Name:</strong> Official diagnostic clinic or hospital lab title (e.g. <em>Apex Clinical Diagnostic Center</em>). Mandatory field printed in the top header.</li>
              <li><strong>Tagline / Sub-title:</strong> Promotional or specialty banner (e.g. <em>Fully Computerized Pathology, Serology & Hormone Lab</em>).</li>
              <li><strong>Address & Contact Info:</strong> <span class="material-icons help-inline-icon">location_on</span> Address Lines 1 & 2, City, State, PIN Code, <span class="material-icons help-inline-icon">phone</span> Primary Phone, Alternate Phone, <span class="material-icons help-inline-icon">email</span> Clinic Email, and Official Website.</li>
              <li><strong>Registrations & Tax Identifiers:</strong> Enter your <em>Lab Reg. / NABL Accreditation Number</em> and <em>GSTIN Number</em> (printed on clinical documents and GST invoices).</li>
              <li><strong>Primary Header Color:</strong> Click the <span class="material-icons help-inline-icon">palette</span> color swatch or input a Hex code (e.g. <code>#0B6B5F</code>) to theme the digital letterhead banner to match your laboratory's corporate identity.</li>
              <li><strong>Subtle Security Watermark:</strong> Toggle <span class="material-icons help-inline-icon">branding_watermark</span> <em>"Subtle Background Watermark"</em> on and enter your preferred watermark phrase (e.g. <em>"ORIGINAL CLINICAL REPORT"</em> or your lab name) for tamper-deterrent background branding.</li>
              <li><strong>Report Timestamps & Options:</strong> Toggle <span class="material-icons help-inline-icon">schedule</span> <em>"Include Sample Collection Time"</em> and <em>"Include Report Generation Time"</em> to control whether hours and minutes or clean calendar dates (DD-MMM-YYYY) are rendered on printed patient reports.</li>
            </ul>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Step 3: Pathologist Signatory & Digital Signature Upload</strong>
            <ul class="body-text" style="padding-left: 1.25rem; margin: 0; display: flex; flex-direction: column; gap: 0.35rem;">
              <li><strong>Consultant Pathologist:</strong> Enter full name with title (e.g. <em>Dr. Rajesh K. Sharma</em>).</li>
              <li><strong>Medical Degrees & Qualifications:</strong> Degrees printed beneath the signature line (e.g. <em>M.B.B.S., M.D. (Pathology), DCP</em>).</li>
              <li><strong>Medical Council Reg. No.:</strong> Regulatory license (e.g. <em>MCI / State Medical Council Reg. No. 49201</em>).</li>
              <li><strong>Lab Technician / Biochemist:</strong> Name of the conducting medical technologist (e.g. <em>P. Sengupta, B.Sc. DMLT</em>).</li>
              <li><strong>Footer Disclaimer:</strong> Standard medicolegal clause (e.g. <em>"Results correlate with clinical symptoms. Partial reproduction of this test report is strictly prohibited."</em>).</li>
              <li><strong>Upload Clinic Logo:</strong> Click <span class="help-icon-chip"><span class="material-icons">upload_file</span> Upload Logo</span> to select your clinic's logo (PNG, JPG, or SVG). It renders crisply in the top-left letterhead.</li>
              <li><strong>Upload Doctor Signature:</strong> Click <span class="help-icon-chip"><span class="material-icons">draw</span> Upload Signature</span> to upload a high-contrast transparent PNG or SVG scan of the pathologist's signature. Positioned above the doctor's name block on all reports.</li>
            </ul>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Step 4: Configure Instant UPI QR Payments</strong>
            <p class="body-text" style="margin: 0 0 0.5rem 0;">
              In the Laboratory Profile section, specify your financial UPI routing endpoints:
            </p>
            <ul class="body-text" style="padding-left: 1.25rem; margin: 0; display: flex; flex-direction: column; gap: 0.35rem;">
              <li><strong>UPI ID (VPA):</strong> <span class="material-icons help-inline-icon">qr_code_2</span> Your clinic's Virtual Payment Address (e.g. <code>apexlab@okaxis</code>, <code>diagnostic@icici</code>).</li>
              <li><strong>UPI Payee Name:</strong> <span class="material-icons help-inline-icon">badge</span> Official merchant/account holder name (e.g. <em>Apex Clinical Diagnostic Center</em>).</li>
            </ul>
            <p class="body-text" style="margin: 0.5rem 0 0 0; font-size: 13px; color: var(--text-secondary);">
              <em>Configuring this generates instant, dynamic NPCI UPI QR codes directly onto patient billing receipts.</em>
            </p>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Step 5: Pre-Printed Stationery Calibration (Tab 2)</strong>
            <p class="body-text" style="margin: 0 0 0.5rem 0;">
              If your laboratory prints on pre-printed offset clinic stationery instead of blank paper:
            </p>
            <ul class="body-text" style="padding-left: 1.25rem; margin: 0; display: flex; flex-direction: column; gap: 0.35rem;">
              <li>Toggle <span class="material-icons help-inline-icon">description</span> <strong>"Use Pre-printed Letterhead Stationery"</strong> to active.</li>
              <li><strong>Reserved Margins (mm):</strong> Measure your physical letterhead with a ruler. Enter <em>Reserved Top (mm)</em> (e.g. <code>45mm</code>) and <em>Reserved Bottom (mm)</em> (e.g. <code>25mm</code>) to prevent report content from printing over existing logos or footers.</li>
              <li><strong>Digital Header Suppression:</strong> Check <em>"Suppress Header (Page 1)"</em> so digital headers don't collide with pre-printed letterheads.</li>
              <li><strong>Optical Calibration Grid:</strong> Use the <span class="help-icon-chip"><span class="material-icons">grid_on</span> Calibration Grid</span> button in the preview toolbar to overlay a 10mm grid for precision printer feed calibration.</li>
              <li><strong>Visual Letterhead Upload:</strong> You can even upload a scan or PDF of your physical letterhead to preview your test results overlaid directly onto your real stationery right in the browser!</li>
            </ul>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Step 6: Investigation Scope & Custom Price List (Tab 3)</strong>
            <ul class="body-text" style="padding-left: 1.25rem; margin: 0; display: flex; flex-direction: column; gap: 0.35rem;">
              <li><strong>Department Filter:</strong> Filter by clinical department <span class="material-icons help-inline-icon">category</span> (Hematology, Biochemistry, Serology, etc.) or choose <strong>"Custom Tests / Others"</strong> to inspect and configure all custom investigations created by your lab.</li>
              <li><strong>Custom Tests Scope & Pricing:</strong> All custom tests added via <em>Test Selection \u203A Add Test</em> appear under <strong>"Custom Tests / Others"</strong> with a distinct <span style="background: color-mix(in srgb, var(--primary) 18%, transparent); color: var(--primary); padding: 1px 6px; border-radius: 999px; font-size: 11px; font-weight: 700;">Custom</span> badge. You can set their package billing price, toggle active parameters, or permanently delete unwanted custom tests via the red <span class="material-icons help-inline-icon" style="color: #ef4444;">delete</span> Delete button.</li>
              <li><strong>Enable / Disable Analytes:</strong> If your lab analyzer does not test specific parameters (e.g. Immature Granulocytes or RDW-SD in CBC), toggle them OFF. Disabled analytes are cleanly omitted from entry forms and print sheets.</li>
              <li><strong>Custom Price List:</strong> Set your clinic's billing price in \u20B9 for each investigation package using the price input or <code>+\u20B950</code>, <code>+\u20B9100</code> quick adjust pills. These prices automatically populate invoices and receipts.</li>
            </ul>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Step 7: Full Database Backup & Disaster Recovery (Tab 4)</strong>
            <p class="body-text" style="margin: 0;">
              Click <span class="help-icon-chip"><span class="material-icons">cloud_download</span> Download Backup</span> under <em>Backup & Restore</em> anytime to export a single encrypted JSON file containing all clinic profiles, doctor directories, pricing lists, and patient report histories. Easily restore with <span class="help-icon-chip"><span class="material-icons">cloud_upload</span> Restore Backup</span> on any new computer.
            </p>
          </div>
        </div>
      </div>

      <!-- ========================================== -->
      <!-- WORKFLOW 2: PATIENT REGISTRATION & INPUT  -->
      <!-- ========================================== -->
      <div class="guide-step" style="border-left: 3px solid #10b981; padding-left: 1.25rem;">
        <h3 class="subsection-title" style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-primary);">
          <span class="material-icons" style="font-size: 22px; color: #10b981;">person</span> 2. Patient Registration & Demographics Input
        </h3>
        <p class="body-text">
          Accurate patient demographics are essential because biological reference intervals, normal ranges, and eGFR formulas automatically calibrate according to age and gender:
        </p>

        <div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Step 1: Locate the Patient Details Card</strong>
            <p class="body-text" style="margin: 0;">
              In the left control panel, expand the top <strong>Patient Details</strong> card. On mobile or small screens, tap the floating <span class="help-icon-chip"><span class="material-icons">tune</span> Controls</span> button at the bottom to open the drawer.
            </p>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Step 2: Enter Mandatory Identifiers</strong>
            <ul class="body-text" style="padding-left: 1.25rem; margin: 0; display: flex; flex-direction: column; gap: 0.35rem;">
              <li><strong>Patient Full Name:</strong> <span class="material-icons help-inline-icon">person_outline</span> Required. The studio displays an error alert and disables printing until a valid patient name is provided.</li>
              <li><strong>Age & Dynamic Age Units:</strong> Enter the patient's numeric age and select the unit:
                <ul style="padding-left: 1.25rem; margin-top: 0.25rem; display: flex; flex-direction: column; gap: 0.2rem;">
                  <li><strong>Years:</strong> Standard adult and pediatric range evaluation.</li>
                  <li><strong>Months:</strong> Specifically for infants (e.g. <em>6 Months</em>). Automatically evaluates pediatric differential leukocyte counts and infant hemoglobin tiers.</li>
                  <li><strong>Days:</strong> Specifically for neonates (e.g. <em>3 Days</em>). Evaluates neonatal physiological jaundice bilirubin bounds.</li>
                </ul>
              </li>
              <li><strong>Sex / Biological Gender:</strong> Select <em>Male</em>, <em>Female</em>, or <em>Other</em>. Gender immediately adjusts reference intervals (e.g. Adult Male Hemoglobin: 13.0\u201317.0 g/dL vs Adult Female Hemoglobin: 12.0\u201315.0 g/dL; Serum Uric Acid, etc.).</li>
            </ul>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Step 3: Record Clinical Traceability & Accessioning Numbers</strong>
            <ul class="body-text" style="padding-left: 1.25rem; margin: 0; display: flex; flex-direction: column; gap: 0.35rem;">
              <li><strong>UHID / Patient ID:</strong> <span class="material-icons help-inline-icon">badge</span> Unique Hospital/Clinic Identification Number (e.g. <code>UHID-84920</code>) for longitudinal record retrieval across repeat visits.</li>
              <li><strong>Sample ID / Barcode:</strong> <span class="material-icons help-inline-icon">qr_code_2</span> Specimen tube accession barcode (e.g. <code>SMP-2026-0041</code>). Prints clearly in the report header and top status ribbon.</li>
              <li><strong>Referring Clinician:</strong> <span class="material-icons help-inline-icon">local_hospital</span> Type the doctor's name with qualification (e.g. <em>Dr. A. Verma, MD</em>). Typeahead autocomplete remembers doctors previously entered. For self-referred walk-ins, click the convenient <span class="help-icon-chip"><span class="material-icons">person</span> Self</span> chip.</li>
              <li><strong>Collection & Reporting Dates and Times:</strong> <span class="material-icons help-inline-icon">calendar_today</span> Enter specimen collection date and time, and report release date and time in separate dedicated inputs. Times default to current time and can be enabled/disabled via Laboratory Settings.</li>
              <li><strong>Clinical History & Remarks:</strong> Enter optional clinical notes (e.g. <em>"Fasting 12 hours. Known diabetic on Metformin."</em>). These print cleanly in the clinical remarks section.</li>
            </ul>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Step 4: Verify Live Patient Context Ribbon</strong>
            <p class="body-text" style="margin: 0;">
              Look at the top studio header ribbon: entered patient name, age/sex badge, UHID, sample barcode, and referring doctor immediately display in a persistent ribbon, ensuring you never lose context while inputting test values.
            </p>
          </div>
        </div>
      </div>

      <!-- ========================================== -->
      <!-- WORKFLOW 3: TEST CATALOG SELECTION         -->
      <!-- ========================================== -->
      <div class="guide-step" style="border-left: 3px solid #3b82f6; padding-left: 1.25rem;">
        <h3 class="subsection-title" style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-primary);">
          <span class="material-icons" style="font-size: 22px; color: #3b82f6;">science</span> 3. Test Catalog Selection, Row-by-Row Search & Custom Tests
        </h3>
        <p class="body-text">
          Select individual diagnostic investigations, comprehensive multi-analyte clinical profiles, or register custom laboratory investigations on the fly:
        </p>

        <div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Method A: Rapid Keyboard Search (HotKey: <kbd>/</kbd>)</strong>
            <p class="body-text" style="margin: 0;">
              Press <kbd style="background: var(--bg-overlay); border: 1px solid var(--glass-border); border-radius: 4px; padding: 2px 6px;">/</kbd> anywhere on your keyboard. Focus instantly jumps to the <span class="material-icons help-inline-icon">search</span> test search input. Type either a panel acronym (e.g. <em>CBC</em>, <em>LFT</em>, <em>KFT</em>, <em>Lipid</em>, <em>Thyroid</em>, <em>Semen Analysis</em>, <em>Stool Examination</em>, <em>ADA</em>, <em>Gram/AFB Stains</em>, <em>Malaria QBC</em>, <em>Mantoux</em>, <em>UPT</em>) or a specific analyte name (e.g. <em>Creatinine</em>, <em>Bilirubin</em>, <em>Sperm Count</em>, <em>Occult Blood</em>, <em>Ascaris</em>, <em>Platelet</em>, <em>SGPT</em>, <em>Uric Acid</em>). Results appear instantly.
            </p>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Method B: Breadcrumb Cards & Row-by-Row Parameter Selection</strong>
            <p class="body-text" style="margin: 0 0 0.5rem 0;">
              Catalog items display a breadcrumb header: <code>Department / Category \u203A Package Name [Sample Type]</code>. Beneath each header, all test parameters are listed row-by-row with individual checkboxes, parameter names, and biological reference ranges:
            </p>
            <ul class="body-text" style="padding-left: 1.25rem; margin: 0; display: flex; flex-direction: column; gap: 0.35rem;">
              <li><strong>Select Individual Test:</strong> Click any analyte row (e.g. <em>RBC</em> or <em>Hemoglobin</em>) to add only that specific test to the report.</li>
              <li><strong>Clean Single-Test Print Formatting:</strong> When an individual test is selected from a package, the printed report suppresses the multi-test package title, section dividers, and package footnotes, cleanly printing only the selected test row.</li>
              <li><strong>Full Package Selection:</strong> Click the <span class="help-icon-chip"><span class="material-icons">add</span> + Add Package</span> button in the card header to select all analytes of the package at once.</li>
            </ul>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Method C: Register Custom Tests (<span class="help-icon-chip"><span class="material-icons">add</span> Add Test</span>)</strong>
            <p class="body-text" style="margin: 0 0 0.5rem 0;">
              Need to test a proprietary investigation or uncommon parameter not in the default catalog? Click the <span class="help-icon-chip"><span class="material-icons">add</span> Add Test</span> button in the top section heading banner or in the search toolbar:
            </p>
            <ul class="body-text" style="padding-left: 1.25rem; margin: 0; display: flex; flex-direction: column; gap: 0.35rem;">
              <li>Enter the <strong>Investigation Name</strong>, select or type a <strong>Department / Category</strong> (including <em>"Custom Tests / Others"</em>), and specify the <strong>Specimen Type</strong>.</li>
              <li>Choose the <strong>Result Type</strong> (Numeric with normal range bounds or Qualitative/Text).</li>
              <li>Configure <strong>Unit of Measurement</strong> (e.g. <code>mg/dL</code>, <code>ng/mL</code>) and <strong>Reference Range</strong>.</li>
              <li>Optionally enter the patient's initial result value and keep <em>"Add to current report immediately"</em> checked.</li>
              <li>Custom investigations persist permanently in your local IndexedDB database, immediately appear under <strong>"Custom Tests / Others"</strong> in the catalog and in <strong>Investigation Scope & Package Pricing</strong>, and remain available for all future patient visits.</li>
            </ul>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Managing Selected Investigations & Section Heading Actions</strong>
            <ul class="body-text" style="padding-left: 1.25rem; margin: 0; display: flex; flex-direction: column; gap: 0.35rem;">
              <li><strong>Section Heading Actions:</strong> The top banner provides one-click access to <span class="help-icon-chip"><span class="material-icons">star</span> Favorites</span> filtering, <span class="help-icon-chip"><span class="material-icons">add</span> Add Test</span>, and <span class="help-icon-chip"><span class="material-icons">delete_sweep</span> Clear</span> to clear all selected tests.</li>
              <li><strong>Bounded Selected Chips:</strong> Selected tests render in a compact chips row capped at 90px height with smooth vertical scrolling and a sticky label, preserving vertical space for the catalog grid.</li>
              <li><strong>Multi-Panel Stacking:</strong> Select multiple panels or individual tests simultaneously. They stack cleanly in the report in optimal clinical order.</li>
              <li><strong>Active Tally:</strong> The top studio navigation displays live counts: e.g. <span class="help-icon-chip"><span class="material-icons">science</span> Tests [3]</span> and detailed parameter tallies in the ribbon.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- ========================================== -->
      <!-- WORKFLOW 4: TEST RESULTS ENTRY & FORMULAS  -->
      <!-- ========================================== -->
      <div class="guide-step" style="border-left: 3px solid #8b5cf6; padding-left: 1.25rem;">
        <h3 class="subsection-title" style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-primary);">
          <span class="material-icons" style="font-size: 22px; color: #8b5cf6;">edit_note</span> 4. Test Results Entry, Rapid Keystrokes & Auto-Calculations
        </h3>
        <p class="body-text">
          Engineered for high laboratory throughput, allowing medical technicians to key in complete reports without ever taking their hands off the keyboard:
        </p>

        <div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">1. Instant Results Search & Dynamic Text Highlighting</strong>
            <p class="body-text" style="margin: 0;">
              Use the full-width search bar at the top of the Results tab to instantly locate any test panel, analyte, or section header across all loaded investigations (e.g. search <em>"platelet"</em> or <em>"creatinine"</em>). Matching text is highlighted in real-time with high-contrast marks, and matching panels auto-expand so you can enter values immediately. Use the <span class="help-icon-chip"><span class="material-icons">unfold_more</span> Expand all / Collapse all</span> button in the section heading to manage panel visibility.
            </p>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">2. Directional Arrow & Enter Traversal</strong>
            <p class="body-text" style="margin: 0;">
              Click into the first parameter input. Type the numeric result and press <kbd>Enter</kbd> or <kbd>\u2193</kbd> (Down Arrow). The value commits instantly and focus automatically jumps to the next analyte row. Press <kbd>\u2191</kbd> (Up Arrow) to navigate backward.
            </p>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">3. Qualitative Rapid Keys (<kbd>N</kbd> / <kbd>P</kbd> / <kbd>A</kbd>)</strong>
            <p class="body-text" style="margin: 0;">
              When navigating qualitative dropdowns (Urine Albumin/Sugar/Ketones, Stool Helminthic Ova, Protozoan Cysts, Semen Viscosity, Widal Test, HBsAg, HIV, VDRL, Dengue, Rapid ICTs):
              simply press <kbd>N</kbd> on your keyboard for <strong>Negative / Non-Reactive / Not seen / Nil</strong>, <kbd>P</kbd> for <strong>Positive / Reactive / Present (+)</strong>, <kbd>A</kbd> for <strong>Absent</strong>, or type <kbd>+</kbd> / <kbd>-</kbd>. No mouse clicks required!
            </p>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">4. One-Click Baseline Pre-Fill ("Fill Normal Values")</strong>
            <p class="body-text" style="margin: 0;">
              Click the <span class="help-icon-chip"><span class="material-icons">bolt</span> Fill Normal Values</span> button at the top of the entry card. All qualitative parameters across all selected panels automatically populate with healthy physiological baselines (e.g. <em>Negative, Nil, Clear, Absent</em>). Technicians only have to modify the abnormal rows, reducing entry time by 70%.
            </p>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">5. Real-Time Out-of-Bounds & Critical Panic Alerts</strong>
            <ul class="body-text" style="padding-left: 1.25rem; margin: 0; display: flex; flex-direction: column; gap: 0.35rem;">
              <li><strong>Automatic High/Low Flagging:</strong> Any numeric value exceeding the age/gender-specific normal range immediately triggers bold <span class="material-icons help-inline-icon" style="color: #f59e0b;">warning</span> <code>L</code> (Low) or <code>H</code> (High) amber tags.</li>
              <li><strong>Critical Life-Threatening Panic Limits:</strong> Devastating deviations (e.g. Potassium &lt; 2.5 or &gt; 6.5 mEq/L, Platelets &lt; 20,000 /\xB5L, Hemoglobin &lt; 6.0 g/dL, Glucose &gt; 500 mg/dL) activate a prominent, pulsing red <span class="material-icons help-inline-icon" style="color: #ef4444;">error</span> <strong>CRITICAL PANIC</strong> alert advising urgent clinical intervention.</li>
            </ul>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">6. Automated Medical Calculation Engine & Overrides</strong>
            <p class="body-text" style="margin: 0 0 0.5rem 0;">
              As raw inputs are entered, derived clinical formulas evaluate in real-time with zero lag:
            </p>
            <ul class="body-text" style="padding-left: 1.25rem; margin: 0; display: flex; flex-direction: column; gap: 0.35rem;">
              <li><strong>CBC / Hemogram:</strong> Calculates Absolute Neutrophil Count (ANC), Absolute Lymphocyte Count (ALC), Absolute Eosinophil Count (AEC), and Neutrophil-to-Lymphocyte Ratio (NLR).</li>
              <li><strong>Lipid Profile (Friedewald Formula):</strong> <code>VLDL = Triglycerides / 5</code>, <code>LDL = Total Cholesterol - HDL - VLDL</code>, <code>Non-HDL Cholesterol</code>, and <code>Chol / HDL Ratio</code>.</li>
              <li><strong>Liver Function Test (LFT):</strong> <code>Globulin = Total Protein - Albumin</code> and <code>A/G Ratio = Albumin / Globulin</code>.</li>
              <li><strong>Renal Function Test (KFT):</strong> Automated <strong>eGFR</strong> via CKD-EPI 2021 Race-Free formula, <code>BUN = Urea / 2.14</code>, and <code>BUN/Creatinine Ratio</code>.</li>
              <li><strong>Diabetology:</strong> Estimated Average Glucose (<code>eAG = 28.7 \xD7 HbA1c - 46.7</code>).</li>
              <li><strong>Manual Override:</strong> Calculated fields display a small <span class="material-icons help-inline-icon" style="color: #8b5cf6;">calculate</span> icon. Simply click into any calculated field to type a manual override whenever atypical pathology or analyzer direct measurement warrants bespoke input.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- ========================================== -->
      <!-- WORKFLOW 5: REPORT HISTORY & PAST VISITS   -->
      <!-- ========================================== -->
      <div class="guide-step" style="border-left: 3px solid #f59e0b; padding-left: 1.25rem;">
        <h3 class="subsection-title" style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-primary);">
          <span class="material-icons" style="font-size: 22px; color: #f59e0b;">history</span> 5. Viewing Report History, Searching & Restoring Past Visits
        </h3>
        <p class="body-text">
          All created, finalized, and amended reports are persisted locally in IndexedDB. Easily retrieve, review, re-print, or repeat visits for existing patients:
        </p>

        <div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Step 1: Open Report History Dialog</strong>
            <p class="body-text" style="margin: 0;">
              Click the <span class="help-icon-chip"><span class="material-icons">history</span> Report History</span> button in the top studio header. The icon displays a live badge indicating the total count of saved patient reports in your offline database.
            </p>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Step 2: Instant Search & Date Filtering</strong>
            <ul class="body-text" style="padding-left: 1.25rem; margin: 0; display: flex; flex-direction: column; gap: 0.35rem;">
              <li><strong>Omni-Search Bar:</strong> <span class="material-icons help-inline-icon">search</span> Type any Patient Name (e.g. <em>Sharma</em>), UHID (e.g. <em>UHID-102</em>), Sample ID (e.g. <em>SMP-41</em>), Referring Doctor, or Test Name (e.g. <em>CBC</em>). Search filters across records in real-time.</li>
              <li><strong>Date Range Filter:</strong> <span class="material-icons help-inline-icon">calendar_today</span> Select between <em>All Dates</em>, <em>Today</em>, <em>Past 7 Days</em>, or <em>Past 30 Days</em>.</li>
              <li><strong>Record Details:</strong> The history table clearly presents Patient Name, Age/Sex, UHID/Sample ID, Conducted Investigations, Date Saved, and Status.</li>
            </ul>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Step 3: Loading / Restoring an Existing Report</strong>
            <p class="body-text" style="margin: 0;">
              Click the <span class="help-icon-chip"><span class="material-icons">open_in_browser</span> Load</span> button on any report row. The system completely restores the entire patient encounter: patient demographics, selected test panels, entered raw values, clinical remarks, and billing ledger state into the active studio workspace! Live preview renders the report immediately for review, amendments, or re-printing.
            </p>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Step 4: Starting a Repeat Visit for an Existing Patient</strong>
            <p class="body-text" style="margin: 0;">
              Click the <span class="help-icon-chip"><span class="material-icons">person_add</span> Repeat Visit</span> button on any patient record. This automatically retains the patient's demographics (Name, Age, Sex, UHID, Referring Doctor) but clears previous test results and generates a fresh visit with a new sample accession ID\u2014saving receptionists from re-typing returning patients' details!
            </p>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Step 5: Deleting Records & Safety Prompts</strong>
            <p class="body-text" style="margin: 0;">
              To remove a draft or test record, click the <span class="help-icon-chip"><span class="material-icons" style="color: #ef4444;">delete</span> Delete</span> icon. A safety confirmation dialog prevents accidental deletion.
            </p>
          </div>
        </div>
      </div>

      <!-- ========================================== -->
      <!-- WORKFLOW 6: PATIENT BILLING & UPI QR       -->
      <!-- ========================================== -->
      <div class="guide-step" style="border-left: 3px solid #06b6d4; padding-left: 1.25rem;">
        <h3 class="subsection-title" style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-primary);">
          <span class="material-icons" style="font-size: 22px; color: #06b6d4;">receipt_long</span> 6. Patient Billing, GST Invoicing & Dynamic UPI QR Payments
        </h3>
        <p class="body-text">
          Eliminate the need for separate accounting software with integrated point-of-sale billing, multi-tender payments, and instant NPCI dynamic QR codes:
        </p>

        <div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Step 1: Open the Invoice Dialog</strong>
            <p class="body-text" style="margin: 0;">
              In the floating preview controls toolbar (top-right over the live report preview), click the <span class="help-icon-chip"><span class="material-icons">receipt_long</span> Invoice</span> button. The modal opens displaying an official invoice number (e.g. <code>INV-2026-0041</code>).
            </p>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Step 2: Automatic Fee Aggregation & Itemized Breakdown</strong>
            <p class="body-text" style="margin: 0;">
              Every investigation selected for the patient is automatically compiled with itemized unit prices drawn from your configured price schedule. The printable A5 sheet preview displays item serial number, investigation name, and rate.
            </p>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Step 3: Apply Concessions & Quick Discounts</strong>
            <p class="body-text" style="margin: 0;">
              Click any quick discount chip: <strong>0%</strong>, <strong>5%</strong>, <strong>10%</strong>, <strong>15%</strong>, or <strong>20%</strong>. The billing engine calculates the deduction in exact integer paise and recalculates Net Total and Balance Due in real-time.
            </p>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Step 4: Record Payments (Cash, Card, UPI)</strong>
            <ul class="body-text" style="padding-left: 1.25rem; margin: 0; display: flex; flex-direction: column; gap: 0.35rem;">
              <li>Select the payment tender chip: <span class="help-icon-chip"><span class="material-icons">payments</span> Cash</span>, <span class="help-icon-chip"><span class="material-icons">qr_code_scanner</span> UPI</span>, or <span class="help-icon-chip"><span class="material-icons">credit_card</span> Card</span>.</li>
              <li>Enter Amount (\u20B9) and an optional Reference / UTR Number (e.g. Card last 4 digits or UPI Ref).</li>
              <li>Click <strong>"Record \u20B9..."</strong> to apply payment. Supports multi-tender split payments (e.g. part Cash and part UPI). All transactions are logged in the receipt audit trail.</li>
            </ul>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Step 5: Dynamic UPI QR Code Scan-to-Pay</strong>
            <p class="body-text" style="margin: 0;">
              If a balance is pending and your laboratory has configured a UPI ID in Lab Settings, the invoice dynamically renders an official <span class="material-icons help-inline-icon">qr_code_2</span> <strong>NPCI UPI QR Code</strong> right on the screen. The patient can scan it using Google Pay, PhonePe, Paytm, BHIM, or Cred to pay the exact outstanding balance without typing errors! Once paid, enter the transaction and balance settles to zero.
            </p>
          </div>

          <div style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1rem;">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;">Step 6: Print Publication-Grade A5 Patient Receipt</strong>
            <p class="body-text" style="margin: 0;">
              When settled, the invoice displays a bold green <span class="material-icons help-inline-icon" style="color: #10b981;">verified</span> <strong>PAID \u2022 SETTLED</strong> stamp. It includes Amount in Words (e.g. <em>"Rupees Seven Hundred and Fifty Only"</em>), clinic GSTIN, patient details, and authorized signatory line. Click <span class="help-icon-chip"><span class="material-icons">print</span> Print Receipt (A5)</span> to produce a crisp half-sheet receipt for the patient.
            </p>
          </div>
        </div>
      </div>

      <!-- ========================================== -->
      <!-- WORKFLOW 7: FINALIZING & AMENDING REPORTS  -->
      <!-- ========================================== -->
      <div class="guide-step" style="border-left: 3px solid #ef4444; padding-left: 1.25rem;">
        <h3 class="subsection-title" style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-primary);">
          <span class="material-icons" style="font-size: 22px; color: #ef4444;">verified_user</span> 7. Clinical Report Governance & Lifecycle (Draft \u2794 Final \u2794 Amended)
        </h3>
        <p class="body-text">
          Pathology Lab Studio enforces clinical audit trails through a 3-tier document lifecycle:
        </p>

        <ul class="body-text" style="padding-left: 1.5rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.4rem;">
          <li><strong>Draft Mode:</strong> Allows active input, adding/removing tests, and real-time live preview updates. The workspace status bar verifies readiness checklist items (Patient \u2713, Tests \u2713, Values Filled).</li>
          <li><strong>Finalizing a Report:</strong> Once all test values are reviewed and verified, click the <span class="help-icon-chip"><span class="material-icons">verified</span> Finalize & Lock</span> button in the preview toolbar. This freezes an immutable cryptographic snapshot of demographics, observations, and timestamps into IndexedDB, locking fields from accidental modification.</li>
          <li><strong>Clinical Amendment Protocol:</strong> If an erratum occurs or a specimen is re-assayed after release, click the status button (<span class="help-icon-chip"><span class="material-icons" style="color: #10b981;">check_circle</span> FINAL</span>) to initiate an Amendment. The system enforces entering a mandatory <em>Amendment Reason</em>. The printed report is permanently stamped with an <span class="help-icon-chip"><span class="material-icons" style="color: #f59e0b;">history_edu</span> AMENDED</span> clinical header and revision audit notes.</li>
        </ul>
      </div>

      <!-- ========================================== -->
      <!-- WORKFLOW 8: PRINT PREVIEW & CALIBRATION    -->
      <!-- ========================================== -->
      <div class="guide-step" style="border-left: 3px solid #14b8a6; padding-left: 1.25rem;">
        <h3 class="subsection-title" style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-primary);">
          <span class="material-icons" style="font-size: 22px; color: #14b8a6;">print</span> 8. Print Preview, Pagination & Pre-Printed Letterhead Calibration
        </h3>
        <p class="body-text">
          Deliver vector-crisp, publication-grade clinical printouts on standard A4 paper or pre-printed clinic letterheads:
        </p>

        <ul class="body-text" style="padding-left: 1.5rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.4rem;">
          <li><strong>Continuous vs Single Page Preview:</strong> Toggle between continuous scroll mode (<span class="material-icons help-inline-icon">view_agenda</span>) and single-page stepped preview (<span class="material-icons help-inline-icon">article</span>) with page navigation chevrons.</li>
          <li><strong>Zoom & Auto-Scale:</strong> Use Auto-Scale (<span class="material-icons help-inline-icon">fit_screen</span>), 100% actual size (<span class="material-icons help-inline-icon">aspect_ratio</span>), Zoom In (<span class="material-icons help-inline-icon">zoom_in</span>), and Zoom Out (<span class="material-icons help-inline-icon">zoom_out</span>) for comfortable reading.</li>
          <li><strong>10mm Optical Alignment Grid:</strong> Click the <span class="help-icon-chip"><span class="material-icons">grid_on</span> Calibration Grid</span> button in the preview toolbar. It overlays a precise 10mm millimeter grid over the sheet. Print a sample sheet over your pre-printed stationery to calibrate margin feeds with micrometer precision!</li>
          <li><strong>Stationery Layer Options:</strong> Click the <span class="help-icon-chip"><span class="material-icons">layers</span> Stationery Options</span> menu to toggle <em>"Suppress Header (Page 1)"</em>, <em>"Suppress Signatures"</em>, or <em>"Show Letterhead in Preview"</em> on the fly.</li>
          <li><strong>High-Resolution Print:</strong> Press <kbd>Ctrl</kbd> + <kbd>P</kbd> or click the primary <span class="help-icon-chip"><span class="material-icons">print</span> Print</span> button. Conforms strictly to W3C CSS Paged Media standards for A4 paper.</li>
        </ul>
      </div>

    </div>
  </div>

  <hr style="border: none; border-top: 1px solid var(--glass-border); margin: 0;">

  <!-- Keyboard Shortcuts Cheat Sheet -->
  <div class="user-guide-section">
    <h2 class="section-title" style="display: flex; align-items: center; gap: 0.5rem;">
      <span class="material-icons" style="font-size: 24px; color: var(--primary);">keyboard</span> Complete Keyboard Shortcuts Reference
    </h2>
    <p class="body-text" style="margin-bottom: 1rem;">
      Boost daily clinical reporting velocity with standardized hotkeys:
    </p>

    <div style="overflow-x: auto; background: var(--bg-overlay, rgba(255,255,255,0.04)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px);">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 13px;">
        <thead>
          <tr style="border-bottom: 1px solid var(--glass-border); background: var(--bg-overlay, rgba(255,255,255,0.06));">
            <th style="padding: 10px 16px; font-weight: 600;">Shortcut</th>
            <th style="padding: 10px 16px; font-weight: 600;">Action</th>
            <th style="padding: 10px 16px; font-weight: 600;">Clinical Context</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid var(--glass-border);">
            <td style="padding: 8px 16px;"><kbd>Enter</kbd> or <kbd>\u2193</kbd></td>
            <td style="padding: 8px 16px;">Commit result and focus next parameter</td>
            <td style="padding: 8px 16px; color: var(--text-secondary);">Result Entry Grid</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--glass-border);">
            <td style="padding: 8px 16px;"><kbd>\u2191</kbd></td>
            <td style="padding: 8px 16px;">Move focus to previous parameter</td>
            <td style="padding: 8px 16px; color: var(--text-secondary);">Result Entry Grid</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--glass-border);">
            <td style="padding: 8px 16px;"><kbd>N</kbd></td>
            <td style="padding: 8px 16px;">Select <em>Negative / Non-Reactive</em></td>
            <td style="padding: 8px 16px; color: var(--text-secondary);">Qualitative Dropdowns (Urine, Serology)</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--glass-border);">
            <td style="padding: 8px 16px;"><kbd>P</kbd></td>
            <td style="padding: 8px 16px;">Select <em>Positive / Reactive</em></td>
            <td style="padding: 8px 16px; color: var(--text-secondary);">Qualitative Dropdowns (Urine, Serology)</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--glass-border);">
            <td style="padding: 8px 16px;"><kbd>/</kbd></td>
            <td style="padding: 8px 16px;">Focus test catalog search input</td>
            <td style="padding: 8px 16px; color: var(--text-secondary);">Global Studio Search</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--glass-border);">
            <td style="padding: 8px 16px;"><kbd>Ctrl</kbd> + <kbd>S</kbd></td>
            <td style="padding: 8px 16px;">Save active report to history database</td>
            <td style="padding: 8px 16px; color: var(--text-secondary);">Global Studio (<span class="material-icons help-inline-icon">save</span>)</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--glass-border);">
            <td style="padding: 8px 16px;"><kbd>Ctrl</kbd> + <kbd>P</kbd></td>
            <td style="padding: 8px 16px;">Open high-resolution print & PDF generator</td>
            <td style="padding: 8px 16px; color: var(--text-secondary);">Global Studio (<span class="material-icons help-inline-icon">print</span>)</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--glass-border);">
            <td style="padding: 8px 16px;"><kbd>Ctrl</kbd> + <kbd>N</kbd></td>
            <td style="padding: 8px 16px;">Clear workspace and start fresh patient encounter</td>
            <td style="padding: 8px 16px; color: var(--text-secondary);">Global Studio (<span class="material-icons help-inline-icon">restart_alt</span>)</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--glass-border);">
            <td style="padding: 8px 16px;"><kbd>Esc</kbd></td>
            <td style="padding: 8px 16px;">Dismiss active editor / blur input</td>
            <td style="padding: 8px 16px; color: var(--text-secondary);">Result Entry Grid / Modals</td>
          </tr>
          <tr>
            <td style="padding: 8px 16px;"><kbd>?</kbd></td>
            <td style="padding: 8px 16px;">Open Clinical Manual & User Guide</td>
            <td style="padding: 8px 16px; color: var(--text-secondary);">Global Studio (<span class="material-icons help-inline-icon">help_outline</span>)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <hr style="border: none; border-top: 1px solid var(--glass-border); margin: 0;">

  <!-- Enterprise Frequently Asked Questions (FAQs) -->
  <div class="faq-section">
    <h2 class="section-title" style="display: flex; align-items: center; gap: 0.5rem;">
      <span class="material-icons" style="font-size: 24px; color: var(--primary);">help_outline</span> Frequently Asked Questions (FAQ)
    </h2>
    <div class="flex-column" style="gap: 1.25rem;">

      <div class="faq-item" style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1.25rem;">
        <h3 class="subsection-title" style="margin-top: 0; color: var(--text-primary);">Q: Is patient health data uploaded to any third-party cloud server?</h3>
        <p class="body-text" style="margin-bottom: 0;">
          <strong>No. Absolutely zero patient data is transmitted over the internet.</strong> The application operates in strict compliance with medical confidentiality and data privacy guidelines. All patient records, reports, lab profiles, and invoices are stored locally inside your browser's persistent <strong>IndexedDB database</strong>. Your records remain private and secure even on isolated offline clinic computers.
        </p>
      </div>

      <div class="faq-item" style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1.25rem;">
        <h3 class="subsection-title" style="margin-top: 0; color: var(--text-primary);">Q: How do I print on our laboratory's existing physical pre-printed letterhead?</h3>
        <p class="body-text" style="margin-bottom: 0;">
          Open <span class="help-icon-chip"><span class="material-icons">tune</span> Settings</span> \u2794 <strong>Stationery Configuration</strong> and toggle <em>"Use Pre-printed Letterhead Stationery"</em> on. Measure the height of your physical letterhead header and footer in millimeters and enter them into <em>Reserved Top (mm)</em> and <em>Reserved Bottom (mm)</em>. Check <em>"Suppress Header (Page 1)"</em> so the digital header is excluded, allowing your pre-printed branding to appear cleanly without double-printing. Use the <span class="help-icon-chip"><span class="material-icons">grid_on</span> Calibration Grid</span> in the preview toolbar to verify paper feed alignment.
        </p>
      </div>

      <div class="faq-item" style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1.25rem;">
        <h3 class="subsection-title" style="margin-top: 0; color: var(--text-primary);">Q: How do I generate an invoice and let patients pay with UPI QR code?</h3>
        <p class="body-text" style="margin-bottom: 0;">
          Make sure your laboratory's <strong>UPI ID (VPA)</strong> is configured under <span class="help-icon-chip"><span class="material-icons">tune</span> Settings</span> \u2794 <em>Laboratory Profile</em>. Then, in the preview toolbar, click the <span class="help-icon-chip"><span class="material-icons">receipt_long</span> Invoice</span> button. The system automatically compiles selected investigations, applies any discount you choose, and renders a dynamic <span class="material-icons help-inline-icon">qr_code_2</span> <strong>NPCI UPI QR Code</strong> with your lab's VPA and exact balance. Patients scan with Google Pay, PhonePe, Paytm, or BHIM. Click <span class="help-icon-chip"><span class="material-icons">print</span> Print Receipt (A5)</span> to print a half-sheet receipt.
        </p>
      </div>

      <div class="faq-item" style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1.25rem;">
        <h3 class="subsection-title" style="margin-top: 0; color: var(--text-primary);">Q: Can I manually override an automated clinical calculation like eGFR or LDL?</h3>
        <p class="body-text" style="margin-bottom: 0;">
          <strong>Yes.</strong> While the clinical formula engine computes values automatically from raw inputs (e.g. Friedewald LDL or CKD-EPI eGFR), clicking on any calculated field (<span class="material-icons help-inline-icon" style="color: #8b5cf6;">calculate</span>) in the <strong>Test Results Entry</strong> table unlocks it for manual typing. This accommodates atypical clinical situations (e.g. extreme hypertriglyceridemia where Friedewald equation is invalid, or direct enzymatic LDL measurement).
        </p>
      </div>

      <div class="faq-item" style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1.25rem;">
        <h3 class="subsection-title" style="margin-top: 0; color: var(--text-primary);">Q: What happens if our lab does not perform certain parameters in a standard panel?</h3>
        <p class="body-text" style="margin-bottom: 0;">
          Navigate to <span class="help-icon-chip"><span class="material-icons">tune</span> Settings</span> \u2794 <strong>Investigation Scope</strong>. Search for the panel (e.g. Complete Blood Count) and toggle off parameters your equipment does not test (such as Immature Granulocytes or RDW-SD). The disabled analytes will no longer appear in your technician's data entry list or on the patient's finalized report sheet.
        </p>
      </div>

      <div class="faq-item" style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1.25rem;">
        <h3 class="subsection-title" style="margin-top: 0; color: var(--text-primary);">Q: What is the difference between a Final report and an Amended report?</h3>
        <p class="body-text" style="margin-bottom: 0;">
          A <span class="help-icon-chip"><span class="material-icons" style="color: #10b981;">check_circle</span> FINAL</span> report freezes an immutable record snapshot into your database to prevent accidental tampering. If clinical post-release modifications are necessary (e.g. specimen re-extraction or corrected clinical findings), initiating an Amendment prompts the clinician for a mandatory explanation, permanently branding the sheet with an <span class="help-icon-chip"><span class="material-icons" style="color: #f59e0b;">history_edu</span> AMENDED</span> clinical header and tracking previous revisions.
        </p>
      </div>

      <div class="faq-item" style="background: var(--bg-overlay, rgba(255,255,255,0.03)); border: 1px solid var(--glass-border); border-radius: var(--radius-md, 8px); padding: 1.25rem;">
        <h3 class="subsection-title" style="margin-top: 0; color: var(--text-primary);">Q: Will the application function during an internet outage?</h3>
        <p class="body-text" style="margin-bottom: 0;">
          <strong>Yes.</strong> The application is a certified Progressive Web Application (PWA). Once loaded in your browser or installed to your desktop, service workers cache all application bundles, diagnostic engines, and icon fonts. You can create, edit, calculate, save, and print reports completely offline without an active internet connection.
        </p>
      </div>

    </div>
  </div>

  <hr style="border: none; border-top: 1px solid var(--glass-border); margin: 0;">

  <!-- Technical & Architectural Specifications -->
  <div class="engineering-section">
    <h2 class="section-title" style="display: flex; align-items: center; gap: 0.5rem;">
      <span class="material-icons" style="font-size: 24px; color: var(--primary);">settings</span> Architecture & Technical Specifications
    </h2>
    <p class="body-text" style="margin-bottom: 1.5rem;">
      Pathology Lab Studio is engineered around reactive state management, strict mathematical precision, and high-performance local storage:
    </p>

    <div class="flex-column" style="gap: 1.25rem;">
      <div class="engineering-card">
        <h3 class="subsection-title" style="display: flex; align-items: center; gap: 0.5rem;">
          <span class="material-icons help-inline-icon" style="color: #f59e0b;">bolt</span> Angular Signals Reactive Store
        </h3>
        <p class="body-text">
          Built with lightweight, fine-grained <strong>Angular Signals</strong>. The centralized <code>ReportStore</code> tracks patient demographics, selected test panels, entered raw values, and clinical overrides. Derived state (abnormal counts, filled counts, calculation dependencies, and validation readiness) evaluates through memorized <code>computed()</code> signals at 60 FPS without wasteful component re-renders.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title" style="display: flex; align-items: center; gap: 0.5rem;">
          <span class="material-icons help-inline-icon" style="color: #3b82f6;">storage</span> Robust Client-Side IndexedDB Engine
        </h3>
        <p class="body-text">
          Data persistence leverages browser-native <strong>IndexedDB</strong> through an asynchronous storage abstraction. Laboratories maintain thousands of patient visits, custom diagnostic panels, customized reference intervals, doctor registries, and base64 clinic logos and signatures with zero memory degradation or local storage size limitations.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title" style="display: flex; align-items: center; gap: 0.5rem;">
          <span class="material-icons help-inline-icon" style="color: #10b981;">straighten</span> CSS Paged Media Print Precision
        </h3>
        <p class="body-text">
          The reporting view strictly conforms to <strong>W3C CSS Paged Media Module Level 3</strong> (<code>@page</code>, <code>size: A4 portrait</code>, <code>break-inside: avoid</code>, and millimetric margin coordinates). Print stylesheets eliminate screen UI controls and backdrop layers, delivering vector-crisp typographic hierarchy with precise 0.25pt hair-line borders suitable for both laser and high-speed clinical printing.
        </p>
      </div>

      <div class="engineering-card">
        <h3 class="subsection-title" style="display: flex; align-items: center; gap: 0.5rem;">
          <span class="material-icons help-inline-icon" style="color: #06b6d4;">monetization_on</span> Integer Paise Monetary Arithmetic
        </h3>
        <p class="body-text">
          Patient billing and tax calculations avoid standard JavaScript floating-point representation anomalies (e.g. <code>0.1 + 0.2 !== 0.3</code>). The billing engine internally performs all financial arithmetic strictly in integer <strong>paise</strong> (\u20B91 = 100 paise), guaranteeing penny-accurate GST computations, percentage discount rounds, and multi-tender cash reconciliations.
        </p>
      </div>
    </div>
  </div>
</div>
`,E={"pathology-lab":et,wordart:$e,"embroidery-digitizer":Ee,"background-remover":je,"png-to-svg-potrace":Le,"png-to-svg":We,"webgl-json-viewer":Fe,"meme-generator":ze,"rich-text-lab":Ge,"svg-sticker-effect":Ue,"rent-receipt":Ne,"ppf-calculator":Be,"aspect-ratio-demo":He,"loan-projector":Ve,"json-viewer":qe,"json-viewer-highperf":Ye,halftone:Qe,"color-picker-demo":Je,"json-compare":Ke,"text-whitespace-remover":Xe,"screen-recorder":Ze};var tt=["searchInput"],it=(o,i)=>i.id;function at(o,i){if(o&1){let e=XE();mi(0,"button",19),Wp("click",function(){Su(e);let n=aD();return Nu(n.backToDashboard())}),mi(1,"mat-icon"),FD(2,"arrow_back"),Hc()();}}function nt(o,i){if(o&1){let e=XE();mi(0,"button",20),Wp("click",function(){Su(e);let n=aD();return Nu(n.openHelpGuide())}),mi(1,"mat-icon"),FD(2,"help_outline"),Hc()();}}function ot(o,i){if(o&1){let e=XE();mi(0,"input",25,1),Wp("ngModelChange",function(n){Su(e);let c=aD(2);return Nu(c.searchQuery.set(n))})("keyup.enter",function(){Su(e);let n=gD(1);return Nu(n.blur())})("blur",function(){Su(e);let n=aD(2);return Nu(n.onSearchBlur())}),Hc(),NI();}if(o&2){let e=aD(2);jp("ngModel",e.searchQuery()),AI();}}function st(o,i){if(o&1){let e=XE();mi(0,"button",21),Wp("click",function(){Su(e);let n=aD();return Nu(n.toggleShowOnlyFavorites())}),mi(1,"mat-icon"),FD(2),Hc()(),mi(3,"div",22),$E(4,ot,2,1,"input",23),mi(5,"button",24),Wp("mousedown",function(n){return n.preventDefault()})("click",function(){Su(e);let n=aD();return Nu(n.toggleSearch())}),mi(6,"mat-icon"),FD(7),Hc()()();}if(o&2){let e=aD();th("active",e.showOnlyFavorites()),jp("matTooltip",e.showOnlyFavorites()?"Show all projects":"Show favorite projects only"),jc("aria-label",e.showOnlyFavorites()?"Show all projects":"Show favorite projects only"),Vv(2),ch(e.showOnlyFavorites()?"star":"star_border"),Vv(),th("active",e.isSearchActive()||e.searchQuery().length>0),Vv(),UE(e.isSearchActive()||e.searchQuery().length>0?4:-1),Vv(),jc("aria-label",e.isSearchActive()||e.searchQuery()?"Clear Search":"Open Search"),Vv(2),ch(e.isSearchActive()||e.searchQuery()?"close":"search");}}function rt(o,i){if(o&1){let e=XE();mi(0,"button",26),Wp("click",function(){Su(e);let n=aD();return Nu(n.toggleShowOnlyFavorites())}),mi(1,"mat-icon"),FD(2),Hc(),mi(3,"span"),FD(4),Hc()(),Vp(5,"mat-divider");}if(o&2){let e=aD();Vv(2),ch(e.showOnlyFavorites()?"star":"star_border"),Vv(2),ch(e.showOnlyFavorites()?"Show All Projects":"Show Favorites Only");}}function lt(o,i){if(o&1&&(Vp(0,"mat-chip",33),XD(1,"highlight")),o&2){let e=i.$implicit,t=aD(4);jp("innerHTML",nw(1,1,e,t.searchQuery()),zy);}}function ct(o,i){if(o&1){let e=XE();mi(0,"mat-card",31),Wp("click",function(){let n=Su(e).$implicit,c=aD(3);return Nu(c.navigateToProject(n.id))}),mi(1,"mat-card-header")(2,"div",32),Vp(3,"mat-card-title",33),XD(4,"highlight"),Hc(),mi(5,"div",34)(6,"button",35),Wp("click",function(n){let c=Su(e).$implicit,w=aD(3);return Nu(w.toggleFavorite(c.id,n))}),mi(7,"mat-icon"),FD(8),Hc()(),mi(9,"button",36),Wp("click",function(n){let c=Su(e).$implicit;return aD(3).navigateToProject(c.id),Nu(n.stopPropagation())}),mi(10,"mat-icon"),FD(11,"launch"),Hc()()()(),mi(12,"mat-card-content"),Vp(13,"p",37),XD(14,"highlight"),mi(15,"div",38)(16,"mat-chip-set"),GE(17,lt,2,4,"mat-chip",33,WE),Hc()()()();}if(o&2){let e=i.$implicit,t=aD(3);th("is-favorite-card",t.isFavorite(e.id))("favorite-highlight-pulse",t.highlightedProjectId()===e.id),jp("id","project-card-"+e.id),jc("aria-label","Open "+e.name),Vv(3),jp("innerHTML",nw(4,13,e.name,t.searchQuery()),zy),Vv(3),th("is-favorite",t.isFavorite(e.id)),jp("matTooltip",t.isFavorite(e.id)?"Remove from favorites":"Add to favorites"),jc("aria-label",t.isFavorite(e.id)?"Remove from favorites":"Add to favorites"),Vv(2),ch(t.isFavorite(e.id)?"star":"star_border"),Vv(5),jp("innerHTML",nw(14,16,e.description,t.searchQuery()),zy),Vv(4),zE(e.technologies);}}function dt(o,i){if(o&1&&(mi(0,"div",28),GE(1,ct,19,19,"mat-card",30,it),Hc()),o&2){let e=i.$implicit;Vv(),zE(e);}}function pt(o,i){if(o&1){let e=XE();mi(0,"mat-icon",39),FD(1,"star_border"),Hc(),mi(2,"h3"),FD(3,"No favorite projects yet"),Hc(),mi(4,"p"),FD(5,"Click the star icon on any card to add it to your favorites."),Hc(),mi(6,"button",40),Wp("click",function(){Su(e);let n=aD(3);return Nu(n.clearFavoriteFilter())}),FD(7," Show All Projects "),Hc();}}function gt(o,i){if(o&1&&(mi(0,"mat-icon",41),FD(1,"search_off"),Hc(),mi(2,"h3"),FD(3),Hc(),mi(4,"p"),FD(5,"Try searching for different keywords or technologies."),Hc()),o&2){let e=aD(3);Vv(3),Wc('No projects found for "',e.searchQuery(),'"');}}function mt(o,i){if(o&1&&(mi(0,"div",29),$E(1,pt,8,0)(2,gt,6,1),Hc()),o&2){let e=aD(2);Vv(),UE(e.showOnlyFavorites()?1:2);}}function ht(o,i){if(o&1&&(mi(0,"div",17)(1,"div",27),GE(2,dt,3,0,"div",28,qE),Hc(),$E(4,mt,3,1,"div",29),Hc()),o&2){let e=aD();Vv(2),zE(e.projectColumns()),Vv(2),UE(e.filteredProjects().length===0?4:-1);}}function ut(o,i){o&1&&(mi(0,"div",18),Vp(1,"router-outlet"),Hc());}var Ae="project_lab_favorites",De=class o{router=T(Q);route=T(W);searchInputRef=g0.required("searchInput");projects=h;currentProject=v;destroy$=new ne;dialogService=T(ge);hasHelp=uw(()=>{let i=this.currentProject();return !!(i?.id&&E[i.id])});isProjectRoute=yn(false);isFullscreen=yn(false);fullscreenChange=f0();searchQuery=yn("");isSearchActive=yn(false);showOnlyFavorites=yn(false);favoriteProjectIds=yn(this.loadInitialFavorites());favoritesCount=uw(()=>this.favoriteProjectIds().size);filteredProjects=uw(()=>{let i=this.searchQuery().toLowerCase().trim(),e=this.showOnlyFavorites(),t=this.favoriteProjectIds(),n=this.projects();return i&&(n=n.filter(c=>c.name.toLowerCase().includes(i)||c.description.toLowerCase().includes(i)||c.technologies.some(w=>w.toLowerCase().includes(i)))),e&&(n=n.filter(c=>t.has(c.id))),[...n].sort((c,w)=>{let Re=t.has(c.id)?1:0;return (t.has(w.id)?1:0)-Re})});breakpointObserver=T(Hn);columnCount=yn(this.getInitialColumnCount());projectColumns=uw(()=>{let i=Math.max(1,this.columnCount()),e=Array.from({length:i},()=>[]);return this.filteredProjects().filter(n=>n.live===true).forEach((n,c)=>{e[c%i].push(n);}),e});getInitialColumnCount(){return typeof window>"u"?3:window.innerWidth<=768?1:window.innerWidth<=1100?2:3}highlightedProjectId=yn(null);highlightTimeout=null;isFavorite(i){return this.favoriteProjectIds().has(i)}toggleFavorite(i,e){e&&(e.stopPropagation(),e.preventDefault());let t=new Set(this.favoriteProjectIds());!t.has(i)?(t.add(i),this.favoriteProjectIds.set(t),this.saveFavorites(t),this.highlightCard(i)):(t.delete(i),this.favoriteProjectIds.set(t),this.saveFavorites(t));}highlightCard(i){this.highlightedProjectId.set(i),this.highlightTimeout&&clearTimeout(this.highlightTimeout),setTimeout(()=>{if(typeof document<"u"){let e=document.getElementById(`project-card-${i}`);e&&e.scrollIntoView({behavior:"smooth",block:"nearest"});}},60),this.highlightTimeout=setTimeout(()=>{this.highlightedProjectId.set(null);},1600);}toggleShowOnlyFavorites(){this.showOnlyFavorites.update(i=>!i);}clearFavoriteFilter(){this.showOnlyFavorites.set(false);}loadInitialFavorites(){try{if(typeof window<"u"&&window.localStorage){let i=localStorage.getItem(Ae);if(i){let e=JSON.parse(i);if(Array.isArray(e))return new Set(e)}}}catch(i){console.warn("Failed to load favorites from localStorage",i);}return new Set}saveFavorites(i){try{typeof window<"u"&&window.localStorage&&localStorage.setItem(Ae,JSON.stringify(Array.from(i)));}catch(e){console.warn("Failed to save favorites to localStorage",e);}}ngOnInit(){this.breakpointObserver.observe(["(max-width: 768px)","(max-width: 1100px)"]).pipe(wl(this.destroy$)).subscribe(()=>{typeof window<"u"&&(window.matchMedia("(max-width: 768px)").matches?this.columnCount.set(1):window.matchMedia("(max-width: 1100px)").matches?this.columnCount.set(2):this.columnCount.set(3));}),this.router.events.pipe(Xt(i=>i instanceof F),wl(this.destroy$)).subscribe(i=>{this.updateCurrentProject(i.url);}),this.updateCurrentProject(this.router.url);}ngOnDestroy(){this.highlightTimeout&&clearTimeout(this.highlightTimeout),this.destroy$.next(),this.destroy$.complete();}toggleSearch(){this.isSearchActive()||this.searchQuery()?(this.searchQuery.set(""),this.isSearchActive.set(false)):(this.isSearchActive.set(true),setTimeout(()=>{this.searchInputRef()?.nativeElement.focus();},0));}onSearchBlur(){this.searchQuery().trim()||this.isSearchActive.set(false);}updateCurrentProject(i){let e=i.split("/"),t=e[e.length-1];if(t&&t!=="projects"){let n=this.projects().find(c=>c.route===t);if(n){v.set(n),this.isProjectRoute.set(true),this.searchQuery.set(""),this.isSearchActive.set(false);return}}v.set(null),this.isProjectRoute.set(false);}navigateToProject(i){let e=this.projects().find(t=>t.id===i);e&&(this.isProjectRoute.set(true),this.searchQuery.set(""),this.isSearchActive.set(false),this.router.navigate([e.route],{relativeTo:this.route}));}backToDashboard(){this.isProjectRoute.set(false),this.isFullscreen()&&this.toggleFullscreen("normal"),this.router.navigate(["/projects"]);}toggleFullscreen(i){let e=i==="fullscreen";this.isFullscreen.set(e),this.fullscreenChange.emit(e);}openHelpGuide(){let i=this.currentProject(),e=i?E[i.id]:void 0;i&&e&&this.dialogService.open({title:`${i.name} Guide`,icon:i.icon,iconColor:"var(--primary)",htmlContent:e,confirmText:"Got it!",hideCancel:true,maxWidth:"800px"});}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=vE({type:o,selectors:[["app-project-lab"]],viewQuery:function(e,t){e&1&&Kp(t.searchInputRef,tt,5),e&2&&hD();},outputs:{fullscreenChange:"fullscreenChange"},decls:38,vars:20,consts:[["viewMenu","matMenu"],["searchInput",""],["appScrollReveal","",1,"section","projects-section"],[1,"projects-card"],[1,"main-header"],[1,"header-content"],["mat-icon-button","","aria-label","Back to dashboard",1,"back-button"],[1,"header-text"],[1,"header-title-wrapper"],["mat-icon-button","","aria-label","Open project guide",1,"help-action-btn"],["aria-label","View mode",1,"view-toggle","desktop-only",3,"change","value"],["value","normal","aria-label","Normal view"],["value","fullscreen","aria-label","Fullscreen view"],["mat-icon-button","",1,"mobile-only","view-menu-btn",3,"matMenuTriggerFor"],["xPosition","before"],["mat-menu-item","",3,"click","disabled"],[1,"content-container"],[1,"projects-dashboard"],[1,"project-content"],["mat-icon-button","","aria-label","Back to dashboard",1,"back-button",3,"click"],["mat-icon-button","","aria-label","Open project guide",1,"help-action-btn",3,"click"],["mat-icon-button","",1,"favorite-filter-btn",3,"click","matTooltip"],[1,"header-search"],["type","text","placeholder","Search apps, tech...","autofocus","",1,"glass-search-input",3,"ngModel"],["mat-icon-button","",3,"mousedown","click"],["type","text","placeholder","Search apps, tech...","autofocus","",1,"glass-search-input",3,"ngModelChange","keyup.enter","blur","ngModel"],["mat-menu-item","",3,"click"],[1,"projects-grid"],[1,"projects-column"],[1,"empty-state"],["tabindex","0","role","button",1,"project-card",3,"id","is-favorite-card","favorite-highlight-pulse"],["tabindex","0","role","button",1,"project-card",3,"click","id"],[1,"card-header-title"],[3,"innerHTML"],[1,"card-header-actions"],["mat-icon-button","",1,"project-favorite-btn",3,"click","matTooltip"],["mat-icon-button","","color","primary","aria-label","Open project",1,"project-launch-btn",3,"click"],[1,"project-description",3,"innerHTML"],[1,"project-technologies"],[1,"empty-state-icon","favorite-empty-icon"],["mat-stroked-button","",1,"clear-filter-btn",3,"click"],[1,"empty-state-icon"]],template:function(e,t){if(e&1&&(mi(0,"section",2)(1,"mat-card",3)(2,"mat-card-header",4)(3,"div",5),$E(4,at,3,0,"button",6),mi(5,"div",7)(6,"div",8)(7,"mat-card-title"),FD(8),Hc(),$E(9,nt,3,0,"button",9),Hc()(),$E(10,st,8,10),mi(11,"mat-button-toggle-group",10),Wp("change",function(c){return t.toggleFullscreen(c.value)}),mi(12,"mat-button-toggle",11)(13,"mat-icon"),FD(14,"fullscreen_exit"),Hc()(),mi(15,"mat-button-toggle",12)(16,"mat-icon"),FD(17,"fullscreen"),Hc()()(),mi(18,"button",13)(19,"mat-icon"),FD(20),Hc()(),mi(21,"mat-menu",14,0),$E(23,rt,6,2),mi(24,"button",15),Wp("click",function(){return t.toggleFullscreen("normal")}),mi(25,"mat-icon"),FD(26,"fullscreen_exit"),Hc(),mi(27,"span"),FD(28,"Normal View"),Hc()(),mi(29,"button",15),Wp("click",function(){return t.toggleFullscreen("fullscreen")}),mi(30,"mat-icon"),FD(31,"fullscreen"),Hc(),mi(32,"span"),FD(33,"Fullscreen"),Hc()()()()(),mi(34,"mat-card-content")(35,"div",16),$E(36,ht,5,1,"div",17),$E(37,ut,2,0,"div",18),Hc()()()()),e&2){let n=gD(22);th("fullscreen",t.isFullscreen()),Vv(),th("fullscreen-card",t.isFullscreen()),Vv(3),UE(t.isProjectRoute()?4:-1),Vv(),th("hide-on-mobile-search",t.isSearchActive()&&!t.isProjectRoute()),Vv(3),ch(t.isProjectRoute()?t.currentProject()?.name:"Project Lab"),Vv(),UE(t.isProjectRoute()&&t.hasHelp()?9:-1),Vv(),UE(t.isProjectRoute()?-1:10),Vv(),jp("value",t.isFullscreen()?"fullscreen":"normal"),Vv(7),th("hide-on-mobile-search",t.isSearchActive()&&!t.isProjectRoute()),jp("matMenuTriggerFor",n),Vv(2),ch(t.isFullscreen()?"fullscreen":"more_vert"),Vv(3),UE(t.isProjectRoute()?-1:23),Vv(),jp("disabled",!t.isFullscreen()),Vv(5),jp("disabled",t.isFullscreen()),Vv(7),UE(t.isProjectRoute()?-1:36),Vv(),UE(t.isProjectRoute()?37:-1);}},dependencies:[xi,yt,Ni,xn,br,z,F$1,k,T$1,j,ci,ui,Mh,Th,$s,ct$1,ki,at$1,Lt,P,G,Nt,F$2,Ot,bt,nt$1,_n,Mi,f,u,s,t],styles:['@property --glass-shine-angle{syntax: "<angle>"; inherits: true; initial-value: 125deg;}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_slideUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_slideDown{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-%COMP%_scaleIn{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}@keyframes _ngcontent-%COMP%_drift{0%{background-position:50% 50%}25%{background-position:60% 40%}50%{background-position:40% 60%}75%{background-position:55% 45%}to{background-position:50% 50%}}@keyframes _ngcontent-%COMP%_wave-motion-1{0%,to{transform:translateZ(0)}25%{transform:translate3d(30px,-20px,0)}50%{transform:translate3d(-20px,10px,0)}75%{transform:translate3d(10px,15px,0)}}@keyframes _ngcontent-%COMP%_wave-motion-2{0%,to{transform:translateZ(0)}25%{transform:translate3d(-25px,15px,0)}50%{transform:translate3d(20px,-10px,0)}75%{transform:translate3d(-15px,-20px,0)}}@keyframes _ngcontent-%COMP%_wave-motion-3{0%,to{transform:translateZ(0)}25%{transform:translate3d(20px,25px,0)}50%{transform:translate3d(-30px,-15px,0)}75%{transform:translate3d(25px,-10px,0)}}@keyframes _ngcontent-%COMP%_wave-motion-4{0%,to{transform:translateZ(0)}25%{transform:translate3d(-20px,-25px,0)}50%{transform:translate3d(25px,20px,0)}75%{transform:translate3d(-10px,10px,0)}}@keyframes _ngcontent-%COMP%_wave-motion-5{0%,to{transform:translateZ(0)}25%{transform:translate3d(15px,-30px,0)}50%{transform:translate3d(-25px,25px,0)}75%{transform:translate3d(20px,-15px,0)}}.empty-state[_ngcontent-%COMP%]{text-align:center;padding:3rem;color:var(--text-secondary)}.empty-state[_ngcontent-%COMP%]   .empty-state-icon[_ngcontent-%COMP%]{display:block;width:var(--layout-icon-xl);height:var(--layout-icon-xl);margin:0 auto var(--spacing-md);opacity:var(--opacity-medium);font-size:var(--layout-icon-xl)}.empty-state[_ngcontent-%COMP%]   .empty-state-icon.favorite-empty-icon[_ngcontent-%COMP%]{color:#f59e0b;opacity:.7}.empty-state[_ngcontent-%COMP%]   .clear-filter-btn[_ngcontent-%COMP%]{margin-top:var(--spacing-md);border-color:var(--glass-border)}@media(max-width:768px){.projects-section[_ngcontent-%COMP%]{padding:.5rem}}.projects-section.fullscreen[_ngcontent-%COMP%]{padding:0;position:fixed;inset:0;width:100dvw;height:100dvh;z-index:1000;background:transparent;margin:0}.projects-card[_ngcontent-%COMP%]{width:100%;max-width:1200px;height:90vh;height:92dvh;display:flex;padding:0!important;flex-direction:column;transition:width,height,max-width,border-radius .3s ease-in-out}.projects-card.fullscreen-card[_ngcontent-%COMP%]{max-width:100%;width:100%;height:100dvh;border-radius:0;border:none}.projects-card.fullscreen-card[_ngcontent-%COMP%]:before, .projects-card.fullscreen-card[_ngcontent-%COMP%]:after{border-radius:0}.projects-card[_ngcontent-%COMP%] > .main-header[_ngcontent-%COMP%]{flex-shrink:0;border-bottom:1px solid var(--glass-border);padding-left:.25rem;padding-right:.25rem}.projects-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{flex:1;overflow:hidden;padding:0}.main-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.25rem;width:100%;min-height:var(--layout-pane-header-height)}.main-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]:has(.back-button){gap:.5rem}.main-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]:has(.back-button)   .header-text[_ngcontent-%COMP%]{padding-left:0}.main-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]{transition:background-color .3s ease-in-out}.main-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]:hover{background-color:var(--glass-inset)}.main-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]{flex:1;min-width:0}.main-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-title-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.25rem;padding-left:.5rem}.main-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-title-wrapper[_ngcontent-%COMP%]   .help-action-btn[_ngcontent-%COMP%]{width:var(--layout-icon-xl);height:var(--layout-icon-xl);padding:0;color:var(--text-secondary);transition:color .3s ease-in-out}.main-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-title-wrapper[_ngcontent-%COMP%]   .help-action-btn[_ngcontent-%COMP%]:hover{color:var(--primary)}.main-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   .header-title-wrapper[_ngcontent-%COMP%]   .help-action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:var(--layout-icon-md);width:var(--layout-icon-md);height:var(--layout-icon-md)}.main-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600;line-height:1.2;letter-spacing:0;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media(max-width:768px){.main-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:1.125rem;font-weight:600;line-height:1.2;letter-spacing:0}}.main-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{font-size:.875rem;font-weight:400;line-height:1.6;letter-spacing:0;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.main-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]:empty{display:none}.desktop-only[_ngcontent-%COMP%]{display:inline-flex!important;visibility:visible!important}@media(max-width:768px){.desktop-only[_ngcontent-%COMP%]{display:none!important;visibility:hidden!important}}.mobile-only[_ngcontent-%COMP%], .view-menu-btn.mobile-only[_ngcontent-%COMP%]{display:none!important;visibility:hidden!important}@media(max-width:768px){.mobile-only[_ngcontent-%COMP%], .view-menu-btn.mobile-only[_ngcontent-%COMP%]{display:inline-flex!important;visibility:visible!important}}.view-toggle[_ngcontent-%COMP%]{flex-shrink:0;margin-right:0}.view-toggle[_ngcontent-%COMP%]   .mat-mdc-button-toggle[_ngcontent-%COMP%]{padding-left:.25rem;padding-right:.25rem;min-width:auto}.back-button[_ngcontent-%COMP%]{flex-shrink:0;padding:0!important}.back-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--text-primary)}.content-container[_ngcontent-%COMP%]{height:100%;position:relative}.projects-dashboard[_ngcontent-%COMP%]{height:100%;overflow-y:auto;scroll-behavior:smooth;padding:1rem}.projects-dashboard[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px;height:8px}.projects-dashboard[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:var(--scrollbar-track);border-radius:4px}.projects-dashboard[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb);border-radius:4px}.projects-dashboard[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:var(--scrollbar-thumb-hover)}.projects-dashboard[_ngcontent-%COMP%]{scrollbar-width:thin;scrollbar-color:var(--scrollbar-thumb) var(--scrollbar-track)}@media(max-width:768px){.projects-dashboard[_ngcontent-%COMP%]{padding:.5rem}}.projects-grid[_ngcontent-%COMP%]{display:flex;gap:var(--spacing-lg);align-items:flex-start;width:100%}.projects-column[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:var(--spacing-lg);min-width:0}@keyframes _ngcontent-%COMP%_favoriteCardPulse{0%{transform:scale(.97);box-shadow:0 0 #f59e0bb3}35%{transform:scale(1.02);box-shadow:0 0 26px 6px #f59e0b66}to{transform:scale(1);box-shadow:0 4px 20px #f59e0b14}}.project-card[_ngcontent-%COMP%]{padding:0;cursor:pointer;transition:transform,box-shadow,border-color .3s ease-in-out;height:auto;border-bottom:1px solid var(--glass-border);display:block;width:100%}.project-card.is-favorite-card[_ngcontent-%COMP%]{border-top:2px solid rgba(245,158,11,.55);box-shadow:0 4px 20px #f59e0b14}.project-card.favorite-highlight-pulse[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_favoriteCardPulse 1.4s cubic-bezier(.22,1,.36,1);border-top:2px solid #f59e0b!important}.project-card[_ngcontent-%COMP%]:hover{transition:transform .3s ease-in-out}.project-card[_ngcontent-%COMP%] > mat-card-header[_ngcontent-%COMP%]{margin:0;padding-left:1rem;padding-right:1rem;display:flex;align-items:center;border-bottom:1px solid var(--glass-border)}@media(max-width:768px){.project-card[_ngcontent-%COMP%] > mat-card-header[_ngcontent-%COMP%]{padding-left:.5rem;padding-right:.5rem}}.project-card[_ngcontent-%COMP%] > mat-card-header[_ngcontent-%COMP%]   .card-header-title[_ngcontent-%COMP%]{flex:1;min-width:0;margin-left:.5rem}.project-card[_ngcontent-%COMP%] > mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600;line-height:1.6;letter-spacing:0;margin:0;padding-top:1rem;padding-bottom:1rem}@media(max-width:768px){.project-card[_ngcontent-%COMP%] > mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:1.125rem;font-weight:600;line-height:1.6;letter-spacing:0}}.project-card[_ngcontent-%COMP%] > mat-card-header[_ngcontent-%COMP%]   .card-header-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--spacing-xs);margin-left:auto;flex-shrink:0}.project-card[_ngcontent-%COMP%] > mat-card-header[_ngcontent-%COMP%]   .card-header-actions[_ngcontent-%COMP%]   .project-favorite-btn[_ngcontent-%COMP%]{border-radius:.25rem;background:transparent;color:var(--text-secondary);width:var(--layout-icon-xl)!important;height:var(--layout-icon-xl)!important;padding:.25rem;transition:all .2s ease}.project-card[_ngcontent-%COMP%] > mat-card-header[_ngcontent-%COMP%]   .card-header-actions[_ngcontent-%COMP%]   .project-favorite-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{transition:transform .3s ease-in-out;font-size:var(--layout-icon-lg)!important;width:var(--layout-icon-lg)!important;height:var(--layout-icon-lg)!important;transition:transform .2s ease,color .2s ease}.project-card[_ngcontent-%COMP%] > mat-card-header[_ngcontent-%COMP%]   .card-header-actions[_ngcontent-%COMP%]   .project-favorite-btn[_ngcontent-%COMP%]:hover{background:var(--glass-inset);color:#f59e0b}.project-card[_ngcontent-%COMP%] > mat-card-header[_ngcontent-%COMP%]   .card-header-actions[_ngcontent-%COMP%]   .project-favorite-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{transform:scale(1.15)}.project-card[_ngcontent-%COMP%] > mat-card-header[_ngcontent-%COMP%]   .card-header-actions[_ngcontent-%COMP%]   .project-favorite-btn.is-favorite[_ngcontent-%COMP%]{color:#f59e0b}.project-card[_ngcontent-%COMP%] > mat-card-header[_ngcontent-%COMP%]   .card-header-actions[_ngcontent-%COMP%]   .project-favorite-btn.is-favorite[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#f59e0b!important}.project-card[_ngcontent-%COMP%] > mat-card-header[_ngcontent-%COMP%]   .card-header-actions[_ngcontent-%COMP%]   .project-launch-btn[_ngcontent-%COMP%]{border-radius:.25rem;background:var(--glass-inset);width:var(--layout-icon-xl)!important;height:var(--layout-icon-xl)!important;padding:.25rem}.project-card[_ngcontent-%COMP%] > mat-card-header[_ngcontent-%COMP%]   .card-header-actions[_ngcontent-%COMP%]   .project-launch-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{transition:transform .3s ease-in-out;font-size:var(--layout-icon-lg)!important;width:var(--layout-icon-lg)!important;height:var(--layout-icon-lg)!important}.project-card[_ngcontent-%COMP%] > mat-card-header[_ngcontent-%COMP%]   .card-header-actions[_ngcontent-%COMP%]   .project-launch-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{transform:scale(1.1)}.project-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:1rem}@media(max-width:768px){.project-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:.5rem}}.project-icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:var(--layout-icon-xl);height:var(--layout-icon-xl)}.project-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--icon-color, var(--primary));font-size:var(--layout-icon-lg);width:var(--layout-icon-lg);height:var(--layout-icon-lg)}.project-description[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;line-height:1.6;letter-spacing:0;padding-left:.5rem;padding-right:.5rem;color:var(--text-secondary);margin-bottom:1rem}.project-technologies[_ngcontent-%COMP%]{padding-left:.5rem;padding-right:.5rem}.project-technologies[_ngcontent-%COMP%]   mat-chip-set[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem}.project-content[_ngcontent-%COMP%]{height:100%;overflow-y:auto}.project-content[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px;height:8px}.project-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:var(--scrollbar-track);border-radius:4px}.project-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb);border-radius:4px}.project-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:var(--scrollbar-thumb-hover)}.project-content[_ngcontent-%COMP%]{scrollbar-width:thin;scrollbar-color:var(--scrollbar-thumb) var(--scrollbar-track)}@media(max-width:768px){.project-content[_ngcontent-%COMP%]{padding:0}}@media(max-width:768px){.hide-on-mobile-search[_ngcontent-%COMP%]{display:none!important}}.favorite-filter-btn[_ngcontent-%COMP%]{width:40px!important;height:40px!important;padding:0!important;border-radius:var(--radius-xl);color:var(--text-secondary);transition:all .2s ease;flex-shrink:0;margin-left:auto}.favorite-filter-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:var(--layout-icon-lg);width:var(--layout-icon-lg);height:var(--layout-icon-lg);transition:transform .2s ease,color .2s ease}.favorite-filter-btn[_ngcontent-%COMP%]:hover{color:#f59e0b;background:var(--glass-inset)}.favorite-filter-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{transform:scale(1.15)}.favorite-filter-btn.active[_ngcontent-%COMP%]{color:#f59e0b;background:#f59e0b26;border:1px solid rgba(245,158,11,.35)}.favorite-filter-btn.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#f59e0b!important}.header-search[_ngcontent-%COMP%]{display:flex;align-items:center;border-radius:.25rem;transition:all .3s ease-in-out;margin-left:var(--spacing-xs);background:transparent}.header-search.active[_ngcontent-%COMP%]{background:var(--bg-overlay);border:1px solid var(--glass-border);padding-left:.5rem;box-shadow:var(--glass-shadow)}@media(max-width:768px){.header-search.active[_ngcontent-%COMP%]{width:100%;justify-content:space-between}}.header-search[_ngcontent-%COMP%]   .glass-search-input[_ngcontent-%COMP%]{border:none;background:transparent;color:var(--text-primary);outline:none;width:var(--layout-search-min-width);font-size:1rem;font-weight:400;line-height:1.6;letter-spacing:0}.header-search[_ngcontent-%COMP%]   .glass-search-input[_ngcontent-%COMP%]::placeholder{color:var(--text-secondary);opacity:.7}@media(max-width:768px){.header-search[_ngcontent-%COMP%]   .glass-search-input[_ngcontent-%COMP%]{width:100%;flex:1}}.header-search[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]{flex-shrink:0}']})};export{De as ProjectLabComponent};