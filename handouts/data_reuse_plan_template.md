##**Data Reuse Planning Template**

Create a text file including information provided below, as appropriate.  Save this file as " **DataReusePlan.txt**" and save in top-level folder of your data set for use by future researchers wanting to reuse your data.

## | **What** |

**Description (abstract):** What is your project about?  What is the goal?  Why are you doing it?  How does this data relate to your project?

**Title:** What do you want to call your data set?

       e.g. "Data from: <name of your project>", "Soil moisture data in Namibian Delta 1982"

**Permanent Identifier:** A way for folks to find your data. Do you have a DOI or other permanent identifier?

       e.g. https://dx.doi.org/10.6084/m9.figshare.2061996.v1

**Data Source:** If you included someone else's data in your data set, provide information on where it came from. Just like articles, if you use it, cite it. It is preferable to include a permanent identifier like a DOI.

       e.g. Forstmann BU, et al. (2014) Data from: Multi-modal ultra-high resolution structural 7-Tesla 
       MRI data repository. Dryad Digital Repository. (http://dx.doi.org/10.5061/dryad.fb41s)

**Subject:** In what discipline or subject area is your project?

       e.g. Neurological biochemistry, applied ecology, etc.

**Related publication:** Have you published an article, thesis or some other publication based on this data? Include a full citation and permanent identifier, if available.

      e.g. Forstmann BU, et al.  (2014) Multi-modal ultra-high resolution structural 7-Tesla MRI data repository.
      Scientific Data 1:140050. (http://dx.doi.org/10.1038/sdata.2014.50)

## | **Who** |

**Data Collector:** Person/organization responsible for collecting data

        e.g. Roberts Lab, University of Washington; Phoebe Marshwana, PhD, Michigan State University

**Funder Information** : Is this project sponsored by a funding agency?  If so, include name of the funding agency, grant number, and principal investigator name/s & affiliations.

       e.g.  Funded by European Commission's Framework 7 Program under Grant No. FP7-ICT-2016- 224495. 
       PI: Dr. Carol Magnusson, Oxford University)

**Collaborators:** Are there any collaborators on this project? Provide names and affiliations.

        e.g.  Dr. Adorja Bilka, Rensselaer Polytechnic Institute

**Contact person:** Who should someone contact for additional information about the data set?  Include affiliation and contact information such as phone number, email, and/or physical address.

        e.g.  Dr. Alain Benziger, Swiss Tropical and Public Health Institute, Socinstrasse 57, 4051 Basel, 
        Switzerland; abenziger@swisstph.ch

## | **Where** |

**Location:** Where was the data collected? One place? Multiple places? Use geographic coordinates if appropriate.

        e.g.  Skukuza, Swaziland; N -24.9916  degrees, W 31.5874 degrees; Multiple sites along Congo 
        River Delta

**Place of publication:** Where is the data made publicly available? Include URL.

       e.g. Penn State University Scholarsphere: https://scholarsphere.psu.edu/

## | **When** |

**Temporal Coverage:** When was the data collected?  On a specific date? Specific time? Over a range of dates? Use the international standard date format (YYYY-MM-DD hh:mm.ss) and try to be as specific as possible.

        e.g. 2015-07-01 to 2015-12-31; 2000 - 2010

**Publication Date:** When was the data made available in the place of publication (above)? Again, use the international standard date format.

        e.g. 2016-01-15

## | **How** |

**Data collection process:** What instruments were used to collect the data? how frequently were the data collected? how were data collection sites selected? if there was a sample population, how was it selected?

       e.g. Minimum and maximum observed temperature for each day was calculated at morning 
       high tide using CoolRead thermometers calibrated using the XYZ method.

**Data processing:** How did you clean the data? how are missing or null values handled? did you write code for processing the data and where can it be found?

       e.g. Differences in site mortality were determined through survdiff tests performed using X software 
       version 2.10.3.  Comparisons with a p-value less than 0.05 (P<0.05) were considered different. Raw data 
       and scripts used in analysis are available in a GitHub repository: https:github.com/omeara/oysters/

**File index:** A listing of folders and files included in the data set.  Explain what files will be found in each folder and naming conventions used.  Additional files could include any questionnaires or other survey instruments used to collect the data.  Be sure to nclude codebooks and data dictionaries or similar README files.

See http://www.fs.usda.gov/rds/archive/products/RDS-2013-0013/_fileindex_RDS-2013-0013.html

**File format/s:** What type/s of files are these?  Are there multiple formats? What software is needed to use the file/s?

Avoid proprietary formats if possible! Most data can be reformatted to be communicated in text-based forms.

        e.g. Data files are in text files in the comma-separated-values format and can be opened with any text editor.

##Note about codebooks and data dictionaries:

The use of additional documentation formats such as codebooks and data dictionaries in conjunction with your DataReusePlan.txt and other data set files makes your data infinitely more reusable and provide assistance with managing your data and your research process as a whole.  Like your Data Reuse Plan, these file are stored with the rest of your data files, usually in a top-level folder.

A **data dictionary** (sometimes used interchangeably with " **codebook**")  is another text file for defining field names and values.  The file includes a list of all field names in the data set and a description of each such as: units of measurement, formulas used for calculation, abbreviations, value ranges, as well as the relationship of fields to one another.

Example of a data dictionary: http://www.utexas.edu/cola/redcap/_files/data_dictionary_example.jpg

For more information see: "Best Practices for Data Dictionary Definitions and Usage" by the Northwest Environmental Data Network (http://www.pnamp.org/sites/default/files/best_practices_for_data_dictionary_definitions_and_usage_version_1.1_2006-11-14.pdf).
