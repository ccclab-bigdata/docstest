var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Faker-1",
    "page": "Readme",
    "title": "Faker",
    "category": "section",
    "text": "<p align=\"center\"><img src=\"faker.png\" width=\"25%\" ></p> <p align=\"center\"> <strong>Generator of fake data for julia.</strong> <br><br> <a href=\"https://travis-ci.org/codeneomatrix/Faker.jl\"><img src=\"https://travis-ci.org/codeneomatrix/Faker.jl.svg?branch=master\"></a> <a href=\"https://codecov.io/gh/codeneomatrix/Faker.jl\">   <img src=\"https://codecov.io/gh/codeneomatrix/Faker.jl/branch/master/graph/badge.svg\" /> </a> &nbsp;&nbsp <a href=\"https://pkg.julialang.org/detail/Faker\"><img src=\"https://pkg.julialang.org/badges/Faker_0.4.svg\"></a>  &nbsp;&nbsp; <a href=\"https://raw.githubusercontent.com/codeneomatrix/Faker.jl/master/LICENSE.md\"><img src=\"https://img.shields.io/badge/license-MIT-blue.svg\"></a>"
},

{
    "location": "#Roadmap-1",
    "page": "Readme",
    "title": "Roadmap",
    "category": "section",
    "text": "Below are some of the features that are planned to be added in future versions of Faker.jl once version 1.0 of the language is released."
},

{
    "location": "#All-contributions-and-suggestions-are-welcome-!!!!-1",
    "page": "Readme",
    "title": "All contributions and suggestions are welcome !!!!",
    "category": "section",
    "text": ""
},

{
    "location": "#Version-0.1.0-1",
    "page": "Readme",
    "title": "Version 0.1.0",
    "category": "section",
    "text": "Julia version 0.7 syntax update"
},

{
    "location": "#Version-0.2.0-1",
    "page": "Readme",
    "title": "Version 0.2.0",
    "category": "section",
    "text": "Julia version 1.0 syntax update\nImplementation of the seed () method.\nLanguage support\nModularization of the method Faker.simple_profile()\nModularization of the method Faker.profile()"
},

{
    "location": "#Version-0.2.1-1",
    "page": "Readme",
    "title": "Version 0.2.1",
    "category": "section",
    "text": "Unicode symbol generator"
},

{
    "location": "#Version-0.2.2-1",
    "page": "Readme",
    "title": "Version 0.2.2",
    "category": "section",
    "text": "Possibility of creating a generator"
},

{
    "location": "#Installing-1",
    "page": "Readme",
    "title": "Installing",
    "category": "section",
    "text": "  # Stable version\n    Pkg> add Faker\n  # Development version\n    Pkg> add Faker#master  using Faker\n\n  Faker.email() # => \"kirsten.greenholt@corkeryfisher.info\""
},

{
    "location": "#Features-available-in-the-current-release-1",
    "page": "Readme",
    "title": "Features available in the current release",
    "category": "section",
    "text": ""
},

{
    "location": "#Seed-1",
    "page": "Readme",
    "title": "Seed",
    "category": "section",
    "text": "Seed for the random number generator. Calling the same script twice with the same seed will produce the same results.  Faker.seed(4321)"
},

{
    "location": "#Language-support-1",
    "page": "Readme",
    "title": "Language support",
    "category": "section",
    "text": "Data generation in the formats of each language   Faker.language(\"es-MX\")   - Espanish (Mexico)"
},

{
    "location": "#Base-1",
    "page": "Readme",
    "title": "Base",
    "category": "section",
    "text": "  Faker.random_digit()                                            # => \"7\"\n  Faker.random_digit_not_null()                                   # => \"4\"\n  Faker.random_digit_or_empty()                                   # => \" \"\n  Faker.random_number(digits= 1)                                  # => \"6\"\n  Faker.random_int(min=0, max=9999)                               # => \"4994\"\n  Faker.randomize_nb_elements(number=10, le=false, ge=false)      # => \"14.9\"\n  Faker.random_letter()                                           # => \"d\"\n  Faker.random_element((\"a\", \"b\", \"b\"))                           # => \"b\"\n  Faker.lexify(\"????\")                                            # => \"VTSa\"\n  Faker.numerify(\"####\")                                          # => \"7491\"\n  Faker.bothify(\"## ??\")                                          # => \"26 Eu\""
},

{
    "location": "#Address-1",
    "page": "Readme",
    "title": "Address",
    "category": "section",
    "text": "\n  Faker.state_abbr()                                # => \"VT\"\n  Faker.latitude()                                  # => 2.505859375\n  Faker.street_name()                               # => \"Schaden Park\"\n  Faker.address()                                   # => \"32935 McClure Trail East Nia, OR 11991-3585\"\n  Faker.street_address()                            # => \"510 Maybell Keys\"\n  Faker.postcode()                                  # => \"22773\"\n  Faker.longitude()                                 # => 4.01171875\n  Faker.country()                                   # => \"Macedonia\"\n  Faker.geo_coordinate(center=\"None\", radius=0.001) # => Float16(-15.99)\n  Faker.secondary_address()                         # => \"Apt. 312\"\n  Faker.city_prefix()                               # => \"West\"\n  Faker.city_suffix()                               # => \"town\"\n  Faker.building_number()                           # => \"532\"\n  Faker.city()                                      # => \"Port Rudy\"\n  Faker.state()                                     # => \"Florida\"\n\n"
},

{
    "location": "#Company-1",
    "page": "Readme",
    "title": "Company",
    "category": "section",
    "text": "\n  Faker.company()                                 # =>  \"Hammes Group\"\n  Faker.company_suffix()                          # => \"Group\"\n  Faker.catch_phrase()                            # => \"Synergistic uniform projection \"\n  Faker.bs()                                      # => \"integrate transparent users \""
},

{
    "location": "#Date-1",
    "page": "Readme",
    "title": "Date",
    "category": "section",
    "text": "   Faker.months()                                                 # =>8\n   Faker.am_pm()                                                  # =>\"PM\"\n   Faker.iso8601()                                                # =>\"2076-06-20T03:19:24\"\n   Faker.date_time()                                              # =>\"2041-1-3 08:20:25\"\n   Faker.month_name()                                             # =>\"March\"\n   Faker.day_of_week()                                            # =>\"Saturday\"\n   Faker.day_of_month()                                           # => 13\n   Faker.date_time_between(\"-30y\", \"now\")                         # =>\"1989-6-7 21:38:44\"\n   Faker.time(\"H:M:S\")                                            # =>\"18:46:36\"\n   Faker.unix_time()                                              # =>454113618933\n   Faker.timezone()                                               # =>\"Asia/Ulaanbaatar\"\n   Faker.century()                                                # =>\"V\"\n   Faker.date(\"Y-m-d\")                                            # =>\"2023-2-19\"\n   Faker.year()                                                   # =>2035\n   Faker.date_time_this_century(before_now=true, after_now=false) # =>\"2007-1-3 00:00:00\"\n   Faker.date_time_this_decade(before_now=true, after_now=false)  # =>\"2018-7-23 00:00:00\"\n   Faker.date_time_this_year(before_now=true, after_now=false)    # =>\"2018-5-17 00:00:00\"\n   Faker.date_time_this_month(before_now=true, after_now=false)   # =>\"2018-9-1 00:00:00\"\n"
},

{
    "location": "#Internet-1",
    "page": "Readme",
    "title": "Internet",
    "category": "section",
    "text": "\n  Faker.email()                                   # => \"TCronin@vh.org\"\n  Faker.free_email()                              # => \"Franecki.Joanie@hotmail.com\"\n  Faker.safe_email()                              # => \"Laurence73@example.co\"\n  Faker.user_name()                               # => \"Iva.Ernser\"\n  Faker.domain_name()                             # => \"sas.info\"\n  Faker.domain_word()                             # => \"bg\"\n  Faker.domain_suffix()                           # =>  \"io\"\n  Faker.ipv4()                                    # => \"242.110.49.158\"\n  Faker.ipv6()                                    # => \"7509:ff7a:85ec:55da:550d:4d4a:28df:e561\"\n  Faker.uri()                                     # => \"http://www.rk.co/categories/main/search/\"\n  Faker.url()                                     # => \"http://www.hi.org/\"\n  Faker.image_url()                               # => \"http://placekitten.com/933/77\"\n  Faker.uri_extension()                           # => \".html\"\n  Faker.uri_path()                                # => \"search/app/tag/categories\"\n  Faker.uri_page()                                # => \"main\"\n  Faker.mac_address()                             # => \"ae:8b:61:b4:a3:52\"\n  Faker.company_email()                           # => \"Hilll.Delsie@td.name\"\n"
},

{
    "location": "#Lorem-1",
    "page": "Readme",
    "title": "Lorem",
    "category": "section",
    "text": "\n  Faker.text(number_chars=200)                           # =>  \"Laudantium molestias eos rerum. Cupiditate voluptatem exercitationem enim.. Qui qui suscipit aspernatur porro. Non. Officiis consequatur harum architecto quibusdam. Explicabo voluptas cumque distinctio maiores voluptatibus..\"\n  Faker.sentence(number_words=6, variable_nb_words=true) # => \"Distinctio numquam velit voluptatem incidunt.\"\n  Faker.word()                                           # => \"eaque\"\n  Faker.paragraphs()                                     # => [\"Numquam unde et dolorem. Rem aut harum perspiciatis. Veritatis..\", \"Consequuntur consequatur recusandae quis. Nobis dolorem ipsum non ipsam. Quia vel et minus sed. Molestiae velit iure..\", \"Culpa expedita. Quo voluptatibus voluptatem ea placeat..\"]\n  Faker.words(number_words=3)                            # =>[\"qui\", \"eos\", \"sit\"]\n  Faker.paragraph(number=3)                              # =>\"Earum exercitationem architecto deserunt dicta alias. Qui eos sint iusto aut..\"\n  Faker.sentences(number_sentences=3)                    # => [\"In et voluptatem.\", \"Nostrum sapiente molestiae.\", \"Saepe ut in non quasi.\", \"Ab totam perspiciatis.\"]\n\n  Faker.phone_number()   # => \"736-329-3523 x8270\"\n  Faker.cell_phone()     # =>  \"(265) 714-5444\"\n"
},

{
    "location": "#Misc-1",
    "page": "Readme",
    "title": "Misc",
    "category": "section",
    "text": "  Faker.password()      # => \"D3Wt#5(2&5&b#7\'R%9BsA5Xr%*Uu%kRy99htT8Fn\"\n  Faker.locale()        # => \"cn_NF\"\n  Faker.null_boolean()  # => false\n  Faker.country_code()  # => \"SS\"\n  Faker.language_code() # => \"es\"\n  Faker.boolean()       # => true"
},

{
    "location": "#Color-1",
    "page": "Readme",
    "title": "Color",
    "category": "section",
    "text": "  Faker.color_name()                              # => \"LightYellow\"\n  Faker.safe_color_name()                         # => \"orchid\"\n  Faker.hex_color()                               # => \"#FFFAFA\"\n  Faker.rgb_color_list()                          # => \"(215,221,84)\"\n  Faker.rgb_color()                               # => \"131,80,74\"\n  Faker.rgb_css_color()                           # => \"rgb(68,107,109)\""
},

{
    "location": "#Credit_card-1",
    "page": "Readme",
    "title": "Credit_card",
    "category": "section",
    "text": "  Faker.credit_card_security_code()               # => \"736\"\n  Faker.credit_card_full()                        # =>\"JCB 16 digit Catherine Crist 3096352382707498 CVC 714\"\n  Faker.credit_card_number()                      # => \"869944451199135\"\n  Faker.credit_card_provider()                    # => \"laser\"\n  Faker.generate_number(\"52\",16)                  # => \"5276029874944399\""
},

{
    "location": "#File-1",
    "page": "Readme",
    "title": "File",
    "category": "section",
    "text": "  Faker.mime_type()                               # => \"image/x-freehand\"\n  Faker.file_extension()                          # => \"rmvb\"\n  Faker.file_name()                               # => \"wTPd.pgn\""
},

{
    "location": "#Person-1",
    "page": "Readme",
    "title": "Person",
    "category": "section",
    "text": "  Faker.first_name()                                   # => \"Jacqulyn\"\n  Faker.last_name()                                    # =>  \"Cronin\"\n  Faker.prefixe()                                      # => \"Miss\"\n  Faker.simple_profile()                               # =>  Dict(\"name\"=>\"Domingo\",\"mail\"=>\"Durgan.Krystle@hotmail.com\",\"username\"=>\"Kimbery29\",\"birthdate\"=>\"2007-5-18\",\"sex\"=>\"F\",\"address\"=>\"8557 McDermott Shores West Alex, OR 96510-7890\")\n  Faker.job()                                          # => \"Immigration officer\"\n  Faker.profile())                                     # =>  \"Dict{String,Any}(\\\"username\\\"=>\\\"Howell.Dannie\\\",\\\"sex\\\"=>\\\"M\\\",\\\"address\\\"=>\\\"931 Grover Court Soilashire, WY 69092-3732\\\",\\\"name\\\"=>\\\"Marissa\\\",\\\"job\\\"=>\\\"Land/geomatics surveyor\\\",\\\"mail\\\"=>\\\"Blondell71@yahoo.com\\\",\\\"birthdate\\\"=>\\\"1984-12-1\\\",\\\"current_location\\\"=>(-1.49512, -5.98828),\\\"blood_group\\\"=>\\\"B-\\\",\\\"residence\\\"=>\\\"6427 Treutel Divide Tienfort, MT 97964-8925\\\",\\\"company\\\"=>\\\"Legros and Sons\\\",\\\"website\\\"=>\\\"http://ol.info/\\\")\"\n  Faker.profile(\"username\")                            # =>  Dict{Any,Any}(\"username\"=>\"Olson.Willy\")\n  Faker.profile(\"username\",\"blood_group\")              # =>  Dict{Any,Any}(\"blood_group\"=>\"A-\",\"username\"=>\"Ronda.Heller\")\n  Faker.simple_profile(\"birthdate\",\"address\",\"sex\")    # => Dict{Any,Any}(\"birthdate\"=>\"1974-11-23\",\"sex\"=>\"F\",\"address\"=>\"16379 Quigley Ramp Smithamborough, OK 39559-7992\")\n  Faker.simple_profile(\"name\")                         # => Dict{Any,Any}(\"name\"=>\"Elina\")"
},

{
    "location": "#User_agent-1",
    "page": "Readme",
    "title": "User_agent",
    "category": "section",
    "text": "  Faker.mac_processor()                           # => \"Intel\"\n  Faker.linux_processor()                         # => \"x86_64\"\n  Faker.user_agent()                              # => \"opera\"\n  Faker.windows_platform_token()                  # => \"Windows CE\"\n  Faker.linux_platform_token()                    # => \"X11; Linux i686\"\n  Faker.mac_platform_token()                      # =>  \"Macintosh; U; Intel Mac OS X 10_5_3\"\n  Faker.chrome()                                  # =>\"Mozilla/5.0 (Windows 98; Win 9x 4.90) AppleWebKit/5331 (KHTML, like Gecko) Chrome/32.0.824.0 Safari/5331\"\n  Faker.firefox()                                 # =>\"Mozilla/5.0 (Windows NT 4.0; sl-SI; rv:1.9.0.20) Gecko/2015-4-22 21:10:48 Firefox/6.0\"\n  Faker.safari()                                  # => \"Mozilla/5.0 (iPod; U; CPU iPhone OS 3_1 like Mac OS X; it-IT) AppleWebKit/534.28.6 (KHTML, like Gecko) Version/3.0.5 Mobile/8B115 Safari/6534.28.6\"\n  Faker.opera()                                   # =>  \"Opera/9.26.(Windows NT 6.1; sl-SI) Presto/2.9.160 Version/10.00)\"\n  Faker.internet_explorer()                       # => \"Mozilla/5.0 (compatible; MSIE 9.0; Windows 95; Trident/3.1)\""
},

{
    "location": "#License-1",
    "page": "Readme",
    "title": "License",
    "category": "section",
    "text": "This code is free to use under the terms of the MIT license."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Faker.CreditCardFaker.FakerFaker.addressFaker.am_pmFaker.apFaker.area_codeFaker.booleanFaker.bothifyFaker.bsFaker.building_numberFaker.catch_phraseFaker.cell_phoneFaker.centuriesFaker.centuryFaker.chromeFaker.cityFaker.city_prefixFaker.city_suffixFaker.color_nameFaker.companyFaker.company_emailFaker.company_prefixFaker.company_suffixFaker.countryFaker.country_codeFaker.credit_card_fullFaker.credit_card_numberFaker.credit_card_providerFaker.credit_card_security_codeFaker.credit_card_typeFaker.credit_card_typesFaker.dataFaker.dateFaker.date_timeFaker.date_time_adFaker.date_time_betweenFaker.date_time_this_centuryFaker.date_time_this_decadeFaker.date_time_this_monthFaker.date_time_this_yearFaker.day_of_monthFaker.day_of_weekFaker.domain_nameFaker.domain_suffixFaker.domain_wordFaker.emailFaker.evalFaker.exchange_codeFaker.executorFaker.female_first_nameFaker.file_extensionFaker.file_nameFaker.firefoxFaker.first_nameFaker.free_emailFaker.free_email_domainFaker.generate_numberFaker.geo_coordinateFaker.hex_colorFaker.image_urlFaker.includeFaker.internet_explorerFaker.ipv4Faker.ipv6Faker.iso8601Faker.jobFaker.lada_dosFaker.lada_tresFaker.langsFaker.languageFaker.language_codeFaker.language_codesFaker.last_nameFaker.latitudeFaker.lexifyFaker.linux_platform_tokenFaker.linux_processorFaker.linux_processorsFaker.loadfilesFaker.localeFaker.longitudeFaker.luhn_lookupFaker.mac_addressFaker.mac_platform_tokenFaker.mac_processorFaker.mac_processorsFaker.male_first_nameFaker.mime_typeFaker.month_nameFaker.monthsFaker.municipalityFaker.null_booleanFaker.numerifyFaker.operaFaker.paragraphFaker.paragraphsFaker.passwordFaker.phone_numberFaker.pixelsFaker.postcodeFaker.prefix_amexFaker.prefix_dinersFaker.prefix_discoverFaker.prefix_jcb15Faker.prefix_jcb16Faker.prefix_mastercardFaker.prefix_visaFaker.prefix_voyagerFaker.prefixeFaker.profileFaker.random_datetimeFaker.random_digitFaker.random_digit_not_nullFaker.random_digit_not_null_or_emptyFaker.random_digit_or_emptyFaker.random_elementFaker.random_intFaker.random_letterFaker.random_numberFaker.randomize_nb_elementsFaker.rgb_colorFaker.rgb_color_listFaker.rgb_css_colorFaker.safariFaker.safe_color_nameFaker.safe_emailFaker.secondary_addressFaker.seedFaker.seleccion_fieldFaker.sentenceFaker.sentencesFaker.simple_profileFaker.stateFaker.state_abbrFaker.street_addressFaker.street_nameFaker.street_prefixFaker.street_suffixFaker.textFaker.timeFaker.timezoneFaker.unix_timeFaker.uriFaker.uri_extensionFaker.uri_extensionsFaker.uri_pageFaker.uri_pagesFaker.uri_pathFaker.uri_pathsFaker.urlFaker.user_agentFaker.user_agentsFaker.user_nameFaker.windows_platform_tokenFaker.windows_platform_tokensFaker.wordFaker.wordsFaker.yearFaker.year_top"
},

]}
