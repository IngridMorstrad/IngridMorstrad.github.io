
module Jekyll
  # The redirect page creates a simple page that refreshes a user from a URL alias to an existing post.
    
  class Redirects < Generator
    safe true
    priority :low

    # only process redirects if it's set in the config file
    def generate(site)    
        z = 1
      site.posts.docs.each do |p|
        ext = "/#{p.data['categories'][0]}/#{p.data['date'].strftime("%Y/%m/%d")}/#{p.data['slug']}#{p.output_ext}"
        redirect = RedirectPage.new(site, site.source, ext, p.id)
        redirect.render(site.layouts, site.site_payload)
        redirect.write(site.dest)
        site.pages << redirect
      end
    end

  end

  # a class for generating the redirect pages.
  class RedirectPage < Page

    def initialize(site, base, path, destination)
      @site = site
      @base = base
      @dir  = path
      @name = 'index.html'
      self.process(@name)

      # Read the YAML data from the layout page.
      self.read_yaml(File.join(base, '_layouts'), 'redirect.html')
      self.data['source_url'] = destination
    end

  end

end
