var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary,
  fontSize: '16px'
}});

var siteConfig = {
  routes: {
    occurrenceSearch: {
      // The route you are currently using for occurrence search. The language prefix will be added automatically
      // If you need special routes per language, then you have to add locale specific overwrites. The page language is available as a global variable called `pageLang`
      // route: '/data'
    }
  },
  occurrence: {
    mapSettings: {
      lat: 43.90328996258526,
      lng: -72.63003253932463,
      zoom: 7.757629316135515
    },
    // You probably need help to configure the scope - so just ask
    // for his demo site we only show Fungi (taxonKey=5). It use the predicate structure known from GBIF download API. 
    // See https://www.gbif.org/developer/occurrence (long page without enough anchors - search for "Occurrence Download Predicates")
    // The format is however slightly different, in that is use camelCase for keys instead of CONSTANT_CASE. 
    // 
    // I've created an initial attempt at an occurrence scope for the site.
    // data from the GADM area vermont (so that requires the occurrences to have coordinates)
    // or that has (country US AND state Vermont AND do not have a coordinate_country issues assigned)
    // or is from the geometry including roughtly the connectocut river (I just drew a rough polygon you would want to check it)
    rootPredicate: { 
      type: 'or',
      predicates: [
        // first include data from the US in the state of Vermont that do not have coordinates
        {
          "type": "and",
          "predicates": [
            {
              "key": "country",
              "type": "equals",
              "value": "US"
            },
            {
              "type": "in",
              "key": "stateProvince", // state province is a free text field, but this is a good start I would think
              "values": [
                "vermont",
                "vermont (state)"
              ]
            },
            {
              "type": "equals",
              "key": "hasCoordinate",
              "value": false
            }
          ]
        },
        // then include data with coordinates that has the correct GADM code
        {
          "type": "equals",
          "key": "gadmGid",
          "value": "USA.46_1"
        },
        // or is from this rought geometry including the connecticut river
        {
          "type": "within",
          "key": "geometry",
          "value": "POLYGON((-72.20363 43.76922,-72.19777 43.7757,-72.202 43.78443,-72.19056 43.79035,-72.18247 43.8033,-72.17801 43.81513,-72.18167 43.82443,-72.17665 43.84189,-72.18004 43.85939,-72.15884 43.86643,-72.16645 43.87746,-72.14999 43.8876,-72.14246 43.89971,-72.11345 43.91463,-72.10821 43.94083,-72.07864 43.9673,-72.10511 43.98025,-72.1071 43.99212,-72.08562 44.00763,-72.06698 44.03916,-72.02458 44.07718,-72.02403 44.10534,-72.04205 44.11407,-72.02308 44.1338,-72.03491 44.16308,-72.05634 44.19462,-72.03709 44.24249,-72.06248 44.24267,-72.2545 43.96427,-72.23756 43.78001,-72.20363 43.76922))"
        }
      ]
    }, 
    occurrenceSearchTabs: ['GALLERY', 'MAP', 'TABLE', 'DATASETS'] // what tabs should be shown
    // see https://hp-theme.gbif-staging.org/data-exploration-config for more options
  }
};

// example of a language specific route overwrite
if (pageLang === 'da')  {
  siteConfig.routes.occurrenceSearch.route = '/observationer/sog';
}