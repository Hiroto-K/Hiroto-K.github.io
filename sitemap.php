<?php
/*
Sitemap generator
Use:php sitemap-github.php > sitemap-github.xml
*/

/**
 * Class SiteMap
 */
class SiteMap
{
    /**
     * DOMDocument instance.
     *
     * @var DOMDocument
     */
    protected $domDocument;

    /**
     * \DOMElement instance.
     *
     * @var \DOMElement
     */
    protected $domElement;

    /**
     * Lastmod date format.
     *
     * @var string
     */
    protected $dateFormat = 'Y-m-d';

    /**
     * SiteMap constructor.
     */
    public function __construct()
    {
        $this->domDocument                     = new DOMDocument('1.0', 'UTF-8');
        $this->domDocument->preserveWhiteSpace = false;
        $this->domDocument->formatOutput       = true;
        $this->domElement                      = $this->domDocument->appendChild($this->domDocument->createElement('urlset'));
        $this->domElement->setAttribute('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');
    }

    /**
     * Get date format.
     *
     * @return string
     */
    public function getDateFormat()
    {
        return $this->dateFormat;
    }

    /**
     * Add url.
     *
     * @param array $info
     *
     * @return $this
     */
    public function addUrl(array $info)
    {
        $url = $this->domElement->appendChild($this->domDocument->createElement('url'));
        foreach ($info as $key => $value) {
            if (is_string($key) && is_string($value)) {
                $url->appendChild($this->domDocument->createElement($key, $value));
            }
        }

        return $this;
    }

    /**
     * Add urls.
     *
     * @param array $urls
     *
     * @return $this
     */
    public function addUrls(array $urls)
    {
        foreach ($urls as $info) {
            $this->addUrl($info);
        }

        return $this;
    }

    /**
     * Return XML string.
     *
     * @return string
     */
    public function saveXML()
    {
        return $this->domDocument->saveXML();
    }

    /**
     * Return GitHub Pages url.
     *
     * @param string $path
     * @return string
     */
    public function getUrl($path)
    {
        return "https://hiroto-k.github.io{$path}";
    }

    /**
     * Get last modified
     * @param string $path
     * @return string
     */
    public function getLastModified($path)
    {
        $headers = get_headers($this->getUrl($path));
        $header = array_values(array_filter($headers, function ($s) {
            return preg_match("/Last-Modified:\s+(.+)/i", $s) === 0 ? false : true;
        }));
        preg_match("/Last-Modified:\s+(.+)/i", $header[0], $matches);
        return date($this->getDateFormat(), strtotime($matches[1]));
    }

    /**
     * Get api gen document pages
     * @param string $repoName
     * @return array
     */
    public function getApiGenPages($repoName) {
        $url = $this->getUrl($repoName);
        $content = file_get_contents($url);
        preg_match_all('/<a href="(.+)">/', $content, $m);
        $m = $m[1];
        array_pop($m);
        $urls = array_map(function ($u) use ($repoName) {
            return $repoName.$u;
        }, $m);
        return $urls;
    }

    /**
     * Cast to string.
     *
     * @return string
     */
    public function __toString()
    {
        return $this->saveXML();
    }
}

/**
 * Class SiteMapGenerator
 */
class SiteMapGenerator {

  /**
   * DOMDocument instance.
   *
   * @var DOMDocument
   */
  protected $domDocument;

  /**
   * \DOMElement instance.
   *
   * @var \DOMElement
   */
  protected $domElement;

  /**
   * SiteMapGenerator constructor.
   */
  public function __construct(){
    $this->domDocument = new DOMDocument("1.0", "UTF-8");
    $this->domDocument->preserveWhiteSpace = false;
    $this->domDocument->formatOutput = true;
    $this->domElement = $this->domDocument->appendChild($this->domDocument->createElement("urlset"));
    $this->domElement->setAttribute("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");
  }

  /**
   * Alias of '__construct()'
   * @return SiteMapGenerator
   */
  public static function make(){
    return new self();
  }

  /**
   * Add url to sitemap
   * @param array $info
   * @return $this
   */
  public function addUrl(array $info){
    $url = $this->domDocument->appendChild($this->domDocument->createElement("url"));
    foreach($info as $key => $value){
      if(is_string($key) && is_string($value)){
        $url->appendChild($this->domDocument->createElement($key, $value));
      }
    }
    return $this;
  }

  /**
   * Add urls to sitemap
   * @param array $urls
   * @return $this
   */
  public function addUrls(array $urls) {
      foreach ($urls as $info) {
          $this->addUrl($info);
      }

      return $this;
  }

  /**
   * Return xml string
   * @return string
   */
  public function saveXML(){
    return $this->domDocument->saveXML();
  }

  /**
   * Return GitHub Pages url
   * @param string $path
   * @return string
   */
  public function getUrl($path) {
    return "https://hiroto-k.github.io{$path}";
  }

  /**
   * Get last modified
   * @param string $path
   * @return string
   */
  public function getLastModified($path) {
    $headers = get_headers($this->getUrl($path));
    $header = array_values(array_filter($headers, function ($s) {
      return preg_match("/Last-Modified:\s+(.+)/i", $s) === 0 ? false : true;
    }));
    preg_match("/Last-Modified:\s+(.+)/i", $header[0], $matches);
    return date("Y-m-d", strtotime($matches[1]));
  }

  /**
   * Get api gen document pages
   * @param string $repoName
   * @return array
   */
  public function getApiGenPages($repoName) {
    $url = $this->getUrl($repoName);
    $content = file_get_contents($url);
    preg_match_all('/<a href="(.+)">/', $content, $m);
    $m = $m[1];
    array_pop($m);
    $urls = array_map(function ($u) use ($repoName) {
      return $repoName.$u;
    }, $m);
    return $urls;
  }

  /**
   * Return xml string
   * @return string
   */
  public function __toString(){
    return $this->saveXML();
  }
}

$siteMap = new SiteMap();

$sites = [
  [
    "loc" => $siteMap->getUrl("/"),
    "lastmod" => $siteMap->getLastModified("/"),
    "changefreq" => "monthly",
    "priority" => "1.0",
  ],
  [
    "loc" => $siteMap->getUrl("/Anime-push/"),
    "lastmod" => $siteMap->getLastModified("/Anime-push/"),
    "changefreq" => "yearly",
    "priority" => "0.8",
  ],
  [
    "loc" => $siteMap->getUrl("/hk_sub_/"),
    "lastmod" => $siteMap->getLastModified("/hk_sub_/"),
    "changefreq" => "yearly",
    "priority" => "0.8",
  ],
  [
    "loc" => $siteMap->getUrl("/HkApps/"),
    "lastmod" => $siteMap->getLastModified("/HkApps/"),
    "changefreq" => "yearly",
    "priority" => "0.8",
  ],
  [
    "loc" => $siteMap->getUrl("/SaveTweet/"),
    "lastmod" => $siteMap->getLastModified("/SaveTweet/"),
    "changefreq" => "yearly",
    "priority" => "0.5",
  ],
  [
    "loc" => $siteMap->getUrl("/ShortURL/"),
    "lastmod" => $siteMap->getLastModified("/ShortURL/"),
    "changefreq" => "yearly",
    "priority" => "0.5",
  ],
  [
    "loc" => $siteMap->getUrl("/EncryptionHelper/"),
    "lastmod" => $siteMap->getLastModified("/EncryptionHelper/"),
    "changefreq" => "yearly",
    "priority" => "0.4",
  ],
  [
    "loc" => $siteMap->getUrl("/MP3-Downloader/"),
    "lastmod" => $siteMap->getLastModified("/MP3-Downloader/"),
    "changefreq" => "yearly",
    "priority" => "0.8",
  ],
  [
    "loc" => $siteMap->getUrl("/Tw-Cron/"),
    "lastmod" => $siteMap->getLastModified("/Tw-Cron/"),
    "changefreq" => "yearly",
    "priority" => "0.5",
  ],
  [
    "loc" => $siteMap->getUrl("/TeamGraphicalGraphics/"),
    "lastmod" => $siteMap->getLastModified("/TeamGraphicalGraphics/"),
    "changefreq" => "yearly",
    "priority" => "0.4",
  ],
  [
    "loc" => $siteMap->getUrl("/CC-Lemon/"),
    "lastmod" => $siteMap->getLastModified("/CC-Lemon/"),
    "changefreq" => "yearly",
    "priority" => "0.4",
  ],
];

foreach (["StringBuilder", "JSON5-php"] as $name) {
  $sites[] = [
    "loc" => $siteMap->getUrl("/$name/"),
    "lastmod" => $siteMap->getLastModified("/$name/"),
    "changefreq" => "yearly",
    "priority" => "0.6",
  ];
  foreach ($siteMap->getApiGenPages("/{$name}/") as $link) {
    $sites[] = [
      "loc" => $siteMap->getUrl($link),
      "lastmod" => $siteMap->getLastModified($link),
      "changefreq" => "monthly",
      "priority" => "0.5",
    ];
  }
}

$siteMap->addUrls($sites);
echo $siteMap->saveXML();