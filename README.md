# Hestia Libraries - `hestiaI18N`

[![Hestia Libraries](.src/logos/hestia_1200x270.svg)](#)

One Peaceful Frontend+Backend Software Library Suite.

This repository houses the operating components of the internationalization
(short for `i18n`) for various supported programming languages. The repository
splits itself into multiple parts depending on its language-specific or
deployment-specific usage.




## Why It Matters

This project was initiated primarily because of:

1. **Ensures proper interoperability between programming languages for i18n** -
   making sure the `hestiaI18N` library talks to each other seamlessly across
   programming languages.
2. **Adapting geo-political changes** - its data are related to geo-political
   changes which can be rapid, drastic, and sensitive.
3. **Simple to integrate** - simple enough to use the supported programming
   language's package manager.
4. **Executing polygot's responsibiltiies** - to execute my contributions back
   to the world for facilitating an usable and reliable multi-lingual functions
   across all technologies.




## Setup

This library supports multiple programming languages for the same dataset.
Hence, in order to use it, please import based on your deployed programming
language:

> **NOTE**
>
> To be updated.




## Data Source

The libraries are based on numorous data sources:

1. Languages (`ISO 639`)
   1. Index - https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes
   2. Source - https://iso639-3.sil.org/code_tables/639/data
2. Scripts (`ISO15924`)
   1. Index - https://en.wikipedia.org/wiki/ISO_15924
   2. Source - https://www.unicode.org/versions/
3. Countries (`ISO 3166`)
   1. Index - https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
   1. Source - https://www.iso.org/iso-3166-country-codes.html

Due to geo-political changes; and the extremely cumbersome, complicated, and
high sensitive work nature, the Wikipedia data sources can be used as a
navigational index for saving time and resources and re-use massive communities'
efforts.

However, its actual data source tracking **SHALL BE VERIFIED** before actual
use.

Please keep in mind that the dataset shall change from time to time as cultural
and art researches are still on-going across the globe.




## Test Cases

The library is heavily guarded with unit tests in each respective programming
languages for consistency and quality assurances. The unit tests ensures:

1. Only 1 unique value in a list data type (no duplications).
2. Ensures `Language`s, `Script`s, and `Country`(ies) can query and work with
   each others (and vice versa).

The library also used enumerations (or macro definitions) heavily for all
ISO defined values. This is to eliminate potential programming typo errors
(which are undetectable by unit test) and also to facilitate an easier value
updates from upstream in the future.




## License

This project is licensed under
[OSI compliant Apache 2.0 License](https://opensource.org/license/apache-2-0/).
