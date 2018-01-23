---

title: 'Preparing Media'
lab: true
studio: false
week_posted: 4
---  


In order to ensure our website run as efficiently as possible on the internet, we need to size images correctly for the web. For example, if you have a div that will contain a 400px wide image, you shouldn't load a 800px image into the browser and size it down with CSS — you should save the image to be 400px wide (naturally).



## Resizing Images

A quick way to resize a folder of images is by using batch resize in Adobe Photoshop:

1. Gather all the images you want to resize into one folder:
	![]({{site.url}}/files/size_1.png)
	<br>

2. Navigate to the Image Processor in Photoshop:
	![]({{site.url}}/files/size_2.png)
	<br>

3. Set your preverences in the resulting dailog box — images will resize proportionally to the values set in the "File Type" section:
	![]({{site.url}}/files/size_4.png)



## Resizing Video

Use Adobe Media Encoder to resize video.

1. Add the video to the que by dragging or clicking the (+) button.
	![]({{site.url}}/files/vid_1.png)
	<br>

2. Set the settings for downsampling
	![]({{site.url}}/files/vid_2.png)
	<br>

The following settings will give you the most bang for your buck:

| Setting         | Value         |
|:----------------|:--------------|
| Format          | H.264         |
| Width           | 720px or less |
| Target Bitrate  | 1-2 mbps      |
| Maximum Bitrate | 2-3 mbps      |
