using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace UmaiFood.Localization
{
    public static class UmaiFoodLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(UmaiFoodConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(UmaiFoodLocalizationConfigurer).GetAssembly(),
                        "UmaiFood.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}
