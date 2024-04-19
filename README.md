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




## Setup

This libraries support multiple programming languages for the same dataset.
Hence, in order to use it, please import based on your deployed programming
language:

> **NOTE**
>
> To be updated.




## Data Source

The libraries are based on numorous data sources:

1. Country SIL (`ISO 3166`)
   1. Index - https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
   1. Source - https://www.iso.org/iso-3166-country-codes.html
2. Languages (`ISO 639`)
   1. Index - https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes
   2. Source - https://iso639-3.sil.org/code_tables/639/data

Due to geo-political changes, extremely cumbersome, complicated, and high
sensitivity in nature, wikipedia data sources can be used as a navigation index
to save time and resources instead of scanning across the Internet. However, its
actual data source tracking **SHALL BE VERIFIED** before actual use.




## License

This project is licensed under
[OSI compliant Apache 2.0 License](https://opensource.org/license/apache-2-0/).
