// components/PDFModal.tsx
'use client';

import { useEffect } from 'react';

const PDFModal = ({ pdf, onClose }: { pdf: any; onClose: () => void }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const htmlContent = `
<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pdf.title}</title>
    <link rel="stylesheet" href="https://js.dearflip.com/wp-content/plugins/dflip/assets/css/dflip.min.css?ver=2.3.58" media="all">
    <script src="https://js.dearflip.com/wp-includes/js/jquery/jquery.min.js?ver=3.7.1"></script>
    <script src="https://js.dearflip.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1"></script>
    <style>
        body {
            margin: 0;
            padding: 0;
            background: transparent !important;
            font-family: 'Courier New', monospace;
        }
        .bg-purple {
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%) !important;
            padding: 20px;
            border-radius: 10px;
            height: 100%;
        }
        ._df_book {
            width: 100% !important;
            height: 100% !important;
            border-radius: 8px;
            box-shadow: 0 0 30px rgba(0, 255, 127, 0.1);
        }
        .df-container {
            border-radius: 8px;
            overflow: hidden;
        }
        /* Ensure the spiral is visible and green */
        .df-book-shadow {
            display: block !important;
        }
    </style>
</head>
<body>
   <div class="site" id="page">
        <div class="site-content" id="content">
            <div class="content-area" id="primary">
                <main class="site-main" id="main">
                    <article class="page">
                        <div class="inside-article">
                            <div class="entry-content">
                                <div class="wp-block-group alignfull no-padding bg-purple">
                                    <div class="wp-block-group__inner-container" style="height: 100%;">
                                        <div class="_df_book df-element df-lazy-embed df-app"
                                            data-slug="${pdf.title.toLowerCase().replace(/ /g, '-')}" 
                                            data-title="${pdf.title}" 
                                            id="df_${pdf.id}" 
                                            data-df-option="df_option_${pdf.id}" 
                                            data-page="1" 
                                            style="height: 100%; min-height: 600px;">
                                            <div class="df-loading-info">Loading ${pdf.title}...</div>
                                            <div class="df-loading-icon"></div>
                                        </div>
                                        <script async data-cfasync="false"
                                            src="https://js.dearflip.com/wp-content/plugins/dflip/assets/js/libs/pdf.min.js?ver=2.3.58&amp;pdfver=default"></script>
                                        <script async data-cfasync="false"
                                            src="https://js.dearflip.com/wp-content/plugins/dflip/assets/js/libs/three.min.js?ver=2.3.58"></script>
                                        <script class="df-shortcode-script" type="application/javascript">
                                            window.df_option_${pdf.id} = { 
                                                "source": "${pdf.pdfUrl}", 
                                                "outline": [], 
                                                "color3DCover": "#00ff7f", 
                                                "backgroundColor": "#0a0a0a", 
                                                "autoEnableOutline": false, 
                                                "autoEnableThumbnail": false, 
                                                "overwritePDFOutline": false, 
                                                "pageMode": "0", 
                                                "pageSize": "0", 
                                                "direction": "1", 
                                                "slug": "cyber-flipbook", 
                                                "wpOptions": "true", 
                                                "id": ${pdf.id}, 
                                                "height": "100%",
                                                "hasSpiral": true,
                                                "spiralColor": "#00ff7f",
                                                "cover3DType": "plain",
                                                "color3DSheets": "#1a1a2e"
                                            }; 
                                            if (window.DFLIP && window.DFLIP.parseBooks) { 
                                                window.DFLIP.parseBooks(); 
                                            }
                                        </script>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </main>
            </div>
        </div>
    </div>

    <script src="https://js.dearflip.com/wp-content/plugins/dflip/assets/js/dflip.min.js?ver=2.3.58"></script>
    <script data-cfasync="false">
        var dFlipLocation = "https://js.dearflip.com/wp-content/plugins/dflip/assets/";
        var dFlipWPGlobal = {
            "text": {
                "toggleSound": "Turn on/off Sound",
                "toggleThumbnails": "Toggle Thumbnails",
                "toggleOutline": "Toggle Outline/Bookmark",
                "previousPage": "Previous Page",
                "nextPage": "Next Page",
                "toggleFullscreen": "Toggle Fullscreen",
                "zoomIn": "Zoom In",
                "zoomOut": "Zoom Out",
                "singlePageMode": "Single Page Mode",
                "doublePageMode": "Double Page Mode",
                "downloadPDFFile": "Download PDF File",
                "gotoFirstPage": "Goto First Page",
                "gotoLastPage": "Goto Last Page",
                "share": "Share"
            },
            "viewerType": "flipbook",
            "mobileViewerType": "auto",
            "moreControls": "download,pageMode,startPage,endPage,sound",
            "hideControls": "altPrev,altNext",
            "leftControls": "outline,thumbnail",
            "rightControls": "fullScreen,share,download,more",
            "hideShareControls": "",
            "scrollWheel": "true",
            "backgroundColor": "#0a0a0a",
            "height": "auto",
            "paddingTop": "20",
            "paddingBottom": "20",
            "paddingLeft": "20",
            "paddingRight": "20",
            "controlsPosition": "bottom",
            "controlsFloating": true,
            "direction": "1",
            "duration": "800",
            "soundEnable": "true",
            "showDownloadControl": "true",
            "pageScale": "fit",
            "maxTextureSize": "3200",
            "rangeChunkSize": "1048576",
            "zoomRatio": "1.5",
            "pageMode": "0",
            "singlePageMode": "0",
            "pageSize": "0",
            "autoPlay": "false",
            "autoPlayDuration": "5000",
            "autoPlayStart": "false",
            "linkTarget": "2",
            "thumbLayout": "book-title-hover",
            "targetWindow": "_popup",
            "hasSpiral": true,
            "spiralColor": "#00ff7f",
            "cover3DType": "plain",
            "color3DCover": "#00ff7f",
            "color3DSheets": "#1a1a2e",
            "flipbook3DTiltAngleUp": "0",
            "flipbook3DTiltAngleLeft": "0",
            "sideMenuOverlay": true
        };
    </script>
</body>
</html>
  `;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl h-[90vh] bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 bg-black/50 border-b border-green-500/20">
          <div>
            <h2 className="text-xl font-bold text-green-400 font-mono">{pdf.title}</h2>
            <p className="text-gray-400 text-sm font-mono mt-1">{pdf.category} • {pdf.difficulty}</p>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 font-mono hover:bg-red-500/30 transition-colors"
          >
            Close [ESC]
          </button>
        </div>

        {/* PDF Content */}
        <div className="h-full p-6">
          <iframe
            srcDoc={htmlContent}
            className="w-full h-full border-none rounded-lg"
            title={`PDF Viewer - ${pdf.title}`}
          />
        </div>
      </div>
    </div>
  );
};

export default PDFModal;